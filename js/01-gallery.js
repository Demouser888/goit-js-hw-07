import { galleryItems } from './gallery-items.js';
// Change code below this line

 //console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const gallaryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', gallaryMarkup);



//console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(items){
return items.map(({preview, original, description})=> {
    return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
})
.join('');
}


gallery.addEventListener('click', onGallaryClick);
    
    
function onGallaryClick(event){
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return
    }
    
    
    //console.log(event.target.dataset.source)

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src=${event.target.dataset.source}
        />
    </div>
`)

instance.show()  

gallery.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    instance.close()
  }
})
}

