import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImages = document.querySelector(".gallery");
const items = [];


galleryItems.forEach(image => {
    
    const galleryLink = document.createElement("a");
    galleryLink.className = "gallery__link";
    galleryLink.href = image.original;

    const galleryImage = document.createElement("img");
    galleryImage.className = "gallery__image";
    galleryImage.src = image.preview;
    galleryImage.setAttribute("title", image.description);
    galleryImage.alt = image.description;

    
    galleryLink.append(galleryImage);

    items.push(galleryLink);

});

galleryImages.append(...items);


new SimpleLightbox('.gallery a', { captionDelay : 250});

