import { findImg } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

const form = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
    event.preventDefault();
  const q = event.currentTarget.elements.searchQuery.value.toLowerCase();

  if (q == '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
    }

    loader.classList.add('loader-show');
    loader.classList.add('gallery-hide');
    
    gallery.innerHTML = '';
    
  findImg(q)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        render(data.hits);
      }
    }).catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
      });
    }).finally(() => {
        loader.classList.remove('loader-show');
        loader.classList.remove('gallery-hide');
    });
});