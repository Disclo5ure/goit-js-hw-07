import { galleryItems } from "./gallery-items.js";
const simpleLightbox = window.SimpleLightbox;

const gallery = document.querySelector(".gallery");

galleryItems.forEach(
  (el) =>
    (gallery.innerHTML += `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
    />
  </a>
</li>`)
);

let lightbox = new simpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(lightbox);
