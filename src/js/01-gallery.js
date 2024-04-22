import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryVal = document.querySelector(".gallery");

function imagesCreate() {
    const imagesDone = [];
    for (const image of galleryItems) {
        const imageMade = document.createElement("li");
        imageMade.classList.add("gallery__item");
        imageMade.innerHTML = 
        `<a class="gallery__link" href="${image.original}">
            <img
                class="gallery__image"
                src="${image.preview}"
                alt="${image.description}"
            />
        </a>`;
        imagesDone.push(imageMade);
    }
    galleryVal.append(...imagesDone);
}

imagesCreate();

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsDelay: 250,
    captionSelector: "img",
    captionType: "attr",
    captionPosition: "bottom",
    captionsData: "alt",
});