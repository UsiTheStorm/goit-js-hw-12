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
// const formData = new FormData(form);
// const searchQuery = formData.get('search-text').trim();
let searchQuery;
const observerTarget = document.querySelector('.js-guard');

let currantPage = 1;
const perPage = 15;
let hits = 0;
// let isLoading = false;
// let hasMore = true;
const options = {
    rootMargin: '350px',
};

const observer = new IntersectionObserver(onScroll, options);
async function onScroll(entries, observer) {
    console.log(entries);
    const entry = entries[0];
    if (entry.isIntersecting) {
        console.log('Вжух Вантаж');
        observer.unobserve(observerTarget);

        currantPage += 1;

        // console.log(currantPage);
        try {
            console.log(searchQuery);
            const images = await getImagesByQuery(searchQuery, currantPage, perPage);

            if (!images.hits.length) {
                showWarningToast('Thats all');
                return;
            }
            createGallery(images.hits);

            hits += images.hits.length;
            if (hits < images.totalHits) {
                observer.observe(observerTarget);
            }
            // observer.observe(observerTarget);
        } catch (error) {
            showErrorToast('An error occurred while fetching images.');
            console.error('Error fetching images:', error);
        }
        // finally {
        //     hideLoader();
        //     setBtnLoading(false);
        // }
    }
}
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    searchQuery = formData.get('search-text').trim();

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

        if (!images.hits.length) {
            showWarningToast('No images found for the search query.');
            return;
        }
        createGallery(images.hits);
        observer.observe(observerTarget);
    } catch (error) {
        showErrorToast('An error occurred while fetching images.');
        console.error('Error fetching images:', error);
    } finally {
        hideLoader();
        setBtnLoading(false);
    }
});
