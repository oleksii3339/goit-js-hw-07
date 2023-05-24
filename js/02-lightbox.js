import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = preview;
  image.alt = description;

  link.appendChild(image);
  listItem.appendChild(link);

  
    return listItem;
};

const renderGallery = (galleryItems) => {
  const galleryItemsMarkup = galleryItems.map((item) =>
    createGalleryItem(item)
  );
  gallery.append(...galleryItemsMarkup);
};

renderGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
console.log(galleryItems);