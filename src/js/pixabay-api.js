import markup from '../js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { hideLoader } from '../main.js';

import axios from 'axios';

let lightbox = new SimpleLightbox('.gallery .gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const API_KEY = '47418374-a80c993bb5abb784419bb47e5';

let page = 2;
let perPage = 15;

const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');

export const fetchFoo = async info => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: info,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    _limit: perPage,
    _page: page,
  });

  axios
    .get(`https://pixabay.com/api/?key=${API_KEY}&q=${params}`)
    .then(data => {
      console.log(data);
      if (data.data.hits.length === 0) {
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
      console.log(data);

      gallery.insertAdjacentHTML('beforeend', markup(data.data.hits));
      lightbox.refresh();
    })
    .catch(error => {
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
};

loadBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchFoo(value);
    markup(posts);
    page += 1;

    if (page > 1) {
      loadBtn.textContent = 'Load more';
    }
  } catch (error) {
    console.log(error);
  }
});
