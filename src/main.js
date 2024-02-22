import { refs } from './js/refs';
import { fetchImg } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

refs.form.addEventListener('submit', formSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

let query;

async function formSubmit(event) {
  event.preventDefault();

  const userValue = event.target.firstElementChild.value.trim();
  if (userValue === '') return;
  loaderOn();
  const elem = await fetchImg(userValue);
  if (elem.hits.length === 0) {
    showError();
  }
  loaderOff();
  render(elem.hits);
}

async function onLoadMoreClick(event) {
  event.preventDefault();

  const userValue = event.target.firstElementChild.value.trim();
  if (userValue === '') return;
  loaderOn();
  const elem = await fetchImg(userValue);
  if (elem.hits.length === 0) {
    showError();
  }
  loaderOff();
  render(elem.hits);
}
//     .catch(() => {
//       showError();
//     });
//   refs.form.reset();
// }

function loaderOn() {
  refs.loaderElem.classList.remove('is-hidden');
}

function loaderOff() {
  refs.loaderElem.classList.add('is-hidden');
}

function showError() {
  iziToast.error({
    title: `Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
    maxWidth: '600px',
  });
}
