
/** Remove popup on click on close button */
const popup = document.querySelector('.popup-overlay');
const popupCloseButton = document.querySelector('.popup-close');

window.onload = (event) => {
    var popupDisplay = sessionStorage.getItem('popupDisplay');
    if(popupDisplay !== 'true') {
        popup.classList.remove('popup-overlay');
        popup.classList.add('display-popup');
    }
}

popupCloseButton.addEventListener('click', function() {
    popup.classList.remove('display-popup');
    popup.classList.add('popup-overlay');
    sessionStorage.setItem('popupDisplay', true);
});
/** End remove popup on click on close button */