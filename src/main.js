import './css/loader.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchFoo } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

if (!form.dataset.listenerAdded) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const input = event.target.elements.search;
    const value = input.value.trim();

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
      return;
    } else {
      showLoader();
      fetchFoo(value);
    }

    form.reset();
  });

  form.dataset.listenerAdded = true;
}
