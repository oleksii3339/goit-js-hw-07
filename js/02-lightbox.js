import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createMarkupGallery = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class= "gallery__item">
  <a href="${original}" class="gallery__link">
  <img class="gallery__image" src="${preview}" alt="${description}">
</a>
</li>`;
    }) 
  .join("")
}

gallery.insertAdjacentHTML("afterbegin", createMarkupGallery());

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);