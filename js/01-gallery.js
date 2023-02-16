import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImages = document.querySelector(".gallery");
const items = [];


galleryItems.forEach(image => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery__item";
    
    const galleryLink = document.createElement("a");
    galleryLink.className = "gallery__link";
    galleryLink.href = image.original;

    const galleryImage = document.createElement("img");
    galleryImage.className = "gallery__image";
    galleryImage.src = image.preview;
    galleryImage.setAttribute("data-source", image.original);
    galleryImage.alt = image.description;

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);

    items.push(galleryItem);

});



galleryImages.append(...items);


galleryImages.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
       


    const selectImage = event.target.getAttribute("data-source");

    const instance = basicLightbox.create(`
		<img src="${selectImage}" width="800" height="600" >
	`);
    
    instance.show()

});

