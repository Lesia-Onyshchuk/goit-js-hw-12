import './css/loader.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import markup from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchFoo } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');

let lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

loadBtn.setAttribute('hidden', true);
loadBtn.style.display = 'none';

function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

let value = '';
let currentPage = 1;
let perPage = 15;

document.addEventListener('DOMContentLoaded', () => {
  loadBtn.hidden = true;
  loadBtn.style.display = 'none';
});

form.addEventListener('submit', event => {
  event.preventDefault();

  currentPage = 1;

  const input = event.target.elements.search;
  value = input.value.trim();

  showLoader();

  if (!value) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
      backgroundColor: '#f39c12',
      messageColor: '#ffffff',
      messageSize: '16px',
      titleColor: '#ffffff',
    });

    gallery.innerHTML = '';
    hideLoader();
    loadBtn.hidden = true;
    loadBtn.style.display = 'none';

    return;
  } else {
    showLoader();
    fetchFoo(value)
      .then(data => {
        if (data.hits.length < perPage) {
          loadBtn.setAttribute('hidden', true);
          loadBtn.style.display = 'none';
        }
        if (data.hits.length === 0) {
          loadBtn.setAttribute('hidden', true);
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: '#ef4040',
            messageColor: '#ffffff',
            messageSize: '16px',
            titleColor: '#ffffff',
          });
        }
        gallery.innerHTML = '';

        gallery.insertAdjacentHTML('beforeend', markup(data.hits));

        lightbox.refresh();
      })
      .catch(error => {
        gallery.innerHTML = '';
        iziToast.error({
          title: 'Error',
          message: `An error occurred: ${error.message}`,
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#ffffff',
          messageSize: '16px',
          titleColor: '#ffffff',
        });
      })
      .finally(() => {
        hideLoader();
      });

    loadBtn.removeAttribute('hidden');
    loadBtn.style.display = 'block';
  }

  form.reset();
  return value;
});

loadBtn.addEventListener('click', async () => {
  currentPage += 1;

  try {
    showLoader();
    const posts = await fetchFoo(value, currentPage);
    const totalPages = Math.ceil(posts.totalHits / perPage);
    gallery.insertAdjacentHTML('beforeend', markup(posts.hits));

    const firstCard = gallery.firstElementChild;
    if (firstCard) {
      const { height: cardHeight } = firstCard.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (currentPage >= totalPages) {
      loadBtn.setAttribute('hidden', true);
      loadBtn.style.display = 'none';
      return iziToast.error({
        title: 'Warning',
        message: "We're sorry, there are no more posts to load",
        position: 'topRight',
        backgroundColor: '#f39c12',
        messageColor: '#ffffff',
        messageSize: '16px',
        titleColor: '#ffffff',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
});
