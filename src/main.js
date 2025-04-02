import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  showLoader,
  createGallery,
  hideLoader,
  container,
} from './js/render-functions';

const iconPath = new URL('./img/iconError.svg', import.meta.url).href;

const form = document.querySelector('.form');
console.dir(form);

form.addEventListener('submit', handleSearch);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
  disableScroll: true,
  fadeSpeed: 400,
  overlayOpacity: 1,
});

function handleSearch(event) {
  event.preventDefault();

  clearGallery();

  const query = form.elements['search-text'].value.trim();
  console.log(query);
  if (!query) return;

  showLoader();

  getImagesByQuery(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#ffffff',
          maxWidth: '400',
          iconUrl: iconPath,
        });
        hideLoader();
        return;
      }
      container.innerHTML = createGallery(hits);

      lightbox.refresh();
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
}

