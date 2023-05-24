import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
};

const renderGallery = (galleryItems) => {
  const galleryItemsMarkup = galleryItems.map((item) => createGalleryItem(item));
  gallery.append(...galleryItemsMarkup);
};

renderGallery(galleryItems);

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageSrc = event.target.parentElement.href;

  const instance = basicLightbox.create(`<img src="${imageSrc}" width="800" height="600">`);
  instance.show();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const instance = basicLightbox.getInstance();
    if (instance) {
      instance.close();
    }
  }
});

console.log(galleryItems);