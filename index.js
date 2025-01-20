let gallery = document.querySelector('.custom_gallery');
let images = Array.from(document.querySelectorAll('.custom_gallery_item'));
let maxItems = document.querySelector('.custom_gallery').getAttribute('data-max-images');

let maxImages = maxItems;

if (images.length > maxImages) {
    maxImages = maxItems - 1;
}

let imagesToShow = images.slice(0, maxImages);
let extraCount = images.length - imagesToShow.length;

gallery.innerHTML = '';

const genrateImages = () => {
    let imageHTML = imagesToShow.map(img => {
        return `
           <img src='${img.currentSrc}' class="custom_gallery_item">
        `;
    }).join('');

    if (extraCount > 0) {
        return imageHTML + `
              <div class="custom_gallery_item extra-element">
                 <p>See ${extraCount} More Images</p>
              </div> `;
    } else {
        return imageHTML;
    }

};

const generateGallery = () => {
    let items = genrateImages();
    gallery.innerHTML = items;
};

generateGallery();