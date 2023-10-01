import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const elementsList = document.querySelector('.gallery');

elementsList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

elementsList.addEventListener('click', handlerClick);


function createMarkup(arr) {
     
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

let modalIsOpen = false;

function handlerClick(evt) { 
    evt.preventDefault();
    const target = evt.target;
    if (target.classList.contains('gallery__image')) {
        const originalImageUrl = target.dataset.source;
         modal = basicLightbox.create(`
         <img src="${originalImageUrl}" width="800" height="600">
         `);
         modal.show();
         modalIsOpen = true;
     }
     document.addEventListener('keydown', keyDown);
 }










