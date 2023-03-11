import { generatePhotos } from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = generatePhotos();

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach((picture) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.urlPhoto;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  similarListFragment.append(pictureElement);
});

similarListElement.append(similarListFragment);

