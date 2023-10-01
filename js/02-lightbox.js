import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const elementsList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
 <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
}).join('');
elementsList.innerHTML = markup;

new simpleLightbox('.gallery a' , {
    captionDelay: 250,
    captionsData: 'alt',
});




