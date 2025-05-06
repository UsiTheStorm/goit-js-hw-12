import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Function to show a success toast
export const showSuccessToast = (message) => {
    iziToast.success({
        title: '✅',
        // backgroundColor: '#a2d1e4',
        message,
        position: 'bottomRight',
        transitionIn: 'bounceInRight',
        transitionOut: 'fadeOut',
        progressBar: true,
        theme: 'light',
        animateInside: true,
        timeout: 5000,
    });
};

// Function to show an error toast
export const showErrorToast = (message) => {
    iziToast.error({
        title: '❌',
        message,
        position: 'bottomRight',
        transitionIn: 'bounceInRight',
        transitionOut: 'fadeOut',
        progressBar: true,
        theme: 'light',
        animateInside: true,
        timeout: 5000,
    });
};

// Function to show a warning toast
export const showWarningToast = (message) => {
    iziToast.warning({
        title: '',
        message,
        backgroundColor: '#a2dbe4',
        position: 'bottomRight',
        transitionIn: 'bounceInRight',
        transitionOut: 'fadeOut',
        progressBar: true,
        theme: 'light',
        animateInside: true,
        timeout: 5000,
    });
};
