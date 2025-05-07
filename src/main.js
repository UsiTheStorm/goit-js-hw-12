import debounce from 'lodash.debounce';
import { showErrorToast, showWarningToast } from './js/utilitis/toasts';
import getImagesByQuery from './js/pixbay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    setBtnLoading,
    scrollToTop,
    checkScrollPosition,
} from './js/render-functions';

const scrollToTopBtn = document.querySelector('.scroll-to-top');

const form = document.querySelector('.form');

let searchQuery;
const observerTarget = document.querySelector('.js-guard');

let currentPage = 1;
const perPage = 15;
let hits = 0;

// Infinity scroll
async function onScroll(entries, observer) {
    const entry = entries[0];
    if (entry.isIntersecting) {
        console.log('Вжух Вантаж');
        observer.unobserve(observerTarget);

        currentPage += 1;

        try {
            const images = await getImagesByQuery(searchQuery, currentPage, perPage);

            if (!images || !images.hits || images.hits.length === 0) {
                showWarningToast('Thats all fellow kids');
                return;
            }
            createGallery(images.hits);
            hits += images.hits.length;

            if (hits < images.totalHits) {
                observer.observe(observerTarget);
            } else {
                showWarningToast('Thats all fellow kids');
            }
        } catch (error) {
            showErrorToast('An error occurred while fetching images.');
            console.error('Error fetching images:', error);
        }
    }
}
const observer = new IntersectionObserver(onScroll, { rootMargin: '350px' });

// Form submit
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    searchQuery = formData.get('search-text').trim();

    if (!searchQuery) {
        showWarningToast('Please enter a search query.');
        return;
    }

    hits = 0;
    currentPage = 1;

    observer.unobserve(observerTarget);

    setBtnLoading(true);
    clearGallery();
    showLoader();
    try {
        const images = await getImagesByQuery(searchQuery, currentPage, perPage);

        if (!images || !images.hits || images.hits.length === 0) {
            showWarningToast('No images found');
            return;
        }
        createGallery(images.hits);
        hits += images.hits.length;

        if (images.hits.length < images.totalHits) {
            observer.observe(observerTarget);
        }
    } catch (error) {
        showErrorToast('An error occurred while fetching images.');
        console.error('Error fetching images:', error);
    } finally {
        hideLoader();
        setBtnLoading(false);
    }
    event.target.reset();
});

// Scroll to top
scrollToTopBtn.addEventListener('click', () => {
    scrollToTop();
});

// Show/hide scroll to top button
const debouncedCheckScroll = debounce(checkScrollPosition, 50);
window.addEventListener('scroll', debouncedCheckScroll);
