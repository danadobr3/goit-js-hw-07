import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const elementsList = document.querySelector('.gallery');

const markup = cats.map(link => `
 <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')

elementsList.insertAdjacentHTML('afterbegin', markup )