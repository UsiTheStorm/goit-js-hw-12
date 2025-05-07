import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('button[type="submit"]');

let myGLightbox = null;

const glightboxOptions = {
    selector: '.glightbox', // CSS selector for the gallery links
    loop: true, // Enable looping through the gallery items
    openEffect: 'zoom', // Effect to use when opening the lightbox
};

// Validate element
function validateElement(element, name) {
    if (!element) {
        console.error(`${name} element not found in the DOM.`);
        return false;
    }
    return true;
}

// Create alt text from tags
function createAltTextFromTags(tags) {
    if (!tags) {
        return 'Gallery image';
    }
    return tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)
        .slice(0, 3)
        .join(',');
}
// Format number
function formatNumberShort(number) {
    const num = Number(number);
    if (Number.isNaN(num)) {
        return 'N/A';
    }
    if (num >= 1000000) {
        return `${Math.floor(num / 1000000)}M`;
    }
    if (num >= 1000) {
        return `${Math.floor(num / 1000)}K`;
    }
    return String(num);
}

// Set button loading
export function setBtnLoading(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Loading';
    } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Search';
    }
}

// Create item of gallery
function createGalleryItem({
    largeImageURL: original,
    webformatURL: preview,
    tags,
    likes,
    views,
    comments,
    downloads,
}) {
    const altText = createAltTextFromTags(tags);

    return /* html */ `<li class="gallery-item">
  <a class="gallery-link glightbox" href="${original}">
      <img
          class="gallery-image"
          src="${preview}" 
          alt="${altText}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
          <img src="icons/like.svg" width="16" alt="Like icon">
              ${formatNumberShort(likes)}
          </span>
          <span class="info-item">
          <img src="icons/view.svg" width="16" alt="View icon">
              ${formatNumberShort(views)}
          </span>
          <span class="info-item">
          <img src="icons/comment.svg" width="16" alt="Comment icon">
              ${formatNumberShort(comments)}
          </span>
          <span class="info-item">
          <img src="icons/download.svg" width="16" alt="Download icon">
              ${formatNumberShort(downloads)}
          </span>
      </div>
  </a>
  </li>`;
}
// Create gallery
export function createGallery(imagesArray) {
    if (!validateElement(gallery, 'Gallery')) return;
    const markup = imagesArray.map(createGalleryItem).join('');
    gallery.insertAdjacentHTML('beforeend', markup);

    // Initialize GLightbox with configuration options
    if (myGLightbox) {
        myGLightbox.destroy();
    }
    myGLightbox = GLightbox(glightboxOptions);
}

// Clear gallery
export function clearGallery() {
    // Destroy GLightbox
    if (myGLightbox) {
        myGLightbox.destroy();
        myGLightbox = null;
    }

    gallery.innerHTML = '';
}

// Show/hide loader
export function showLoader() {
    if (!validateElement(loader, 'Loader')) return;
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    if (!validateElement(loader, 'Loader')) return;
    loader.classList.add('is-hidden');
}
