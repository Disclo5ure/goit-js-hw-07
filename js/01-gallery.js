import { galleryItems } from "./gallery-items.js";
const basicLightbox = window.basicLightbox;

const gallery = document.querySelector(".gallery");

galleryItems.forEach(
  (el) =>
    (gallery.innerHTML += `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`)
);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(`
    <div class="modal">
        <img
      src="${e.target.dataset.sourwwwwwwwce}"
      alt="${e.target.alt}"
    />
    </div>
`);
  instance.show();
  const closeModal = (e) => {
    if (e.code === "Escape") {
      instance.close();
      gallery.removeEventListener("keyup", closeModal);
    }
  };
  gallery.addEventListener("keyup", closeModal);
});

console.log(basicLightbox);
