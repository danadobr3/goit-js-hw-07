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
    if (evt.target === evt.currentTarget) {
        return;
    } 
    const source = evt.target.dataset.source;
    const instance = basicLightbox.create(`
   <img src="${source}" alt="${evt.target.alt}" />
`);
    instance.show();
    isModalOpen = true;
    document.addEventListener('keydown', keyDown);
}
function keyDown(evt) {
    if (evt.key === 'Escape' && modalIsOpen) {
        const instance = basicLightbox.getInstance();
        if (instance) {
            instance.close();
            modalIsOpen = false;
            document.removeEventListener('keydown', keyDown);
        }
    }
}
console.log(basicLightbox);

