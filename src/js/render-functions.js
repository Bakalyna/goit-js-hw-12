import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

const lightbox = new SimpleLightbox('.gallery a', {});

export function render(items) {
  const markup = templateImages(items);
  refs.galleryElem.innerHTML = markup;
  lightbox.refresh();
}

export function templateImage(item) {
  console.log(item);
  return `<li class="gallery-item">
  <a class="gallery-link" href="${item.largeImageURL}">
        <img class="gallery-link" alt="" src="${item.previewURL}" />
        </a>
        <ul class="list-content">
          <li class="list-text">
            <p class="list-text-item">Likes <span>${item.likes}</span></p>
          </li>
          <li class="list-text">          
            <p class="list-text-item">Views <span>${item.views}</span></p>
          </li>
          <li class="list-text">           
            <p class="list-text-item">Comments <span>${item.comments}</span></p>
          </li>
          <li class="list-text">           
            <p class="list-text-item">Downloads <span>${item.downloads}</span></p>
          </li>
        </ul>
        </li>`;
}

function templateImages(items) {
  return items.map(templateImage).join('');
}
