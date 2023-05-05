
/** Remove popup on click on close button */
const popup = document.querySelector('.popup-overlay');
const popupCloseButton = document.querySelector('.popup-close');

popupCloseButton.addEventListener('click', function() {
    popup.classList.add('remove-popup');
});
/** End remove popup on click on close button */
