import { refs } from './js/refs';
import { fetchImg } from './js/pixabay-api';
import { render } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

refs.form.addEventListener('submit', formSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

let userValue;
let page;
let maxPage;

async function formSubmit(event) {
  event.preventDefault();

  userValue = event.target.firstElementChild.value.trim();
  page = 1;
  loaderOn();
  if (userValue === '') return;
  try {
    const elem = await fetchImg(userValue, page);
    console.log(elem);
    maxPage = Math.ceil(elem.totalHits / 15);
    if (elem.hits.length === 0) {
      showError();
    }
    refs.galleryElem.innerHTML = '';
    render(elem.hits);
  } catch {
    showError();
  }
  loaderOff();
  checkBtnVisibleStatus();
}

async function onLoadMoreClick() {
  page += 1;
  if (userValue === '') return;
  try {
    loaderOn();
    const elem = await fetchImg(userValue, page);
    if (elem.hits.length === 0) {
      showError();
    }
    render(elem.hits);
    scrollPage();
  } catch {
    showError();
  }
  loaderOff();
  checkBtnVisibleStatus();
}

function showLoadBtn() {
  refs.btnLoadMore.classList.remove('is-hidden');
}
function hideLoadBtn() {
  refs.btnLoadMore.classList.add('is-hidden');
}
function checkBtnVisibleStatus() {
  console.log(page, maxPage);
  if (page >= maxPage) {
    hideLoadBtn();
    iziToast.info({
      title: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      maxWidth: '600px',
    });
  } else {
    showLoadBtn();
  }
}

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

function scrollPage() {
  const height =
    refs.galleryElem.firstElementChild.getBoundingClientRect().height;
  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
