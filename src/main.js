import { showErrorToast, showWarningToast } from './js/utilitis/toasts';
import getImagesByQuery from './js/pixbay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    setBtnLoading,
} from './js/render-functions';

const form = document.querySelector('.form');
let currantPage = 1;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const searchQuery = formData.get('search-text').trim();

    if (!searchQuery) {
        showWarningToast('Please enter a search query.');
        return;
    }

    event.target.reset();

    setBtnLoading(true);
    clearGallery();
    showLoader();
    try {
        const images = await getImagesByQuery(searchQuery, currantPage);
        if (!images.length) {
            showWarningToast('No images found for the search query.');
            return;
        }
        createGallery(images);
    } catch (error) {
        showErrorToast('An error occurred while fetching images.');
        console.error('Error fetching images:', error);
    } finally {
        hideLoader();
        setBtnLoading(false);
    }
});
