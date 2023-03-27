import { isEscapeKey } from './util.js';

const bigPictureElement = document.querySelector('.big-picture');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPictureElement.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openBigPicture, closeBigPicture};

