import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const elementsList = document.querySelector('.gallery');

elementsList.insertAdjacentHTML("beforeend", createMarkp(galleryItems));

function createMarkp(arr) {
     
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`).join('')
}