import { openBigPicture, closeBigPicture} from './big-picture.js';
import { similarPictures } from './thumbnail.js';

const bigPictureOpenElement = document.querySelector('.pictures');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const bigPicturePreview = document.querySelector('.big-picture__preview');
const imgUrl = bigPicturePreview.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicturePreview.querySelector('.likes-count');
const commentsCount = bigPicturePreview.querySelector('.comments-count');
const description = bigPicturePreview.querySelector('.social__caption');
const commentsList = bigPicturePreview.querySelector('.social__comments');
const commentElementTemplate = commentsList.querySelector('.social__comment');

bigPictureOpenElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.picture__img')) {
        openBigPicture();

        document.querySelector('body').classList.add('modal-open');

        const thumbnail = evt.target.closest('.picture');
        const picture = similarPictures.find(
            (element) => element.idPhoto === +thumbnail.getAttribute('data-thumbnail-id')
        );

        imgUrl.src = picture.urlPhoto;
        likesCount.textContent = picture.likes;
        commentsCount.textContent = picture.comments.length;
        description.textContent = picture.descriptionPhoto;
            
        commentsList.textContent = '';

        picture.comments.forEach((comment) => {
            const commentElement = commentElementTemplate.cloneNode(true);
            commentElement.querySelector('.social__picture').src = comment.avatar;
            commentElement.querySelector('.social__picture').alt = comment.name;
            commentElement.querySelector('.social__text').textContent = comment.message;
            commentsList.append(commentElement);
        });    
        
        document.querySelector('.social__comment-count').classList.add('hidden');
        document.querySelector('.comments-loader').classList.add('hidden');   
    };
});

bigPictureCloseElement.addEventListener('click', () => {
    closeBigPicture();
    document.querySelector('body').classList.remove('modal-open');
});
