const PHOTO_COUNT = 25;

const DESCRIPTION = [
  'Пляж при отеле',
  'Путь к пляжу',
  'Райский пляж',
  'Фотографирую на пляже',
  'Милые супчики',
  'Черная машина',
  'Клубника на завтрак',
  'Свежевыжатый сок',
  'Ого, самолет прямо над нами',
  'Удобная обувница',
  'Выход к пляжу',
  'Белая ауди',
  'Вкусный свежий салат',
  'Котуши',
  'Новые тапочки',
  'Вид из окна иллюминатора',
  'Побывали на концерте хора',
  'Олдскульная машина',
  'Еще одни новые тапочки',
  'Приотельная территория',
  'Мой обед',
  'Sunset',
  'Мистер краб',
  'Отожгли на концерте',
  'Встретили гиппопотамов',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Давид',
  'Иван',
  'Константин',
  'Марьяна',
  'Мария',
  'Владимир',
  'Зоя',
  'Милана',
  'Анастасия',
  'Макар',
  'Ева',
  'Кристина',
  'Варвара',
  'Павел',
  'Екатерина',
  'Мирон',
  'Алиса',
  'Виктория',
  'Даниил',
  'Платон',
  'Арина',
  'Алексей',
  'Ульяна',
  'Кирилл',
  'Ксения',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhoto = (id) => ({
  idPhoto: id,
  urlPhoto: `photos/${id}.jpg`,
  descriptionPhoto: DESCRIPTION[id - 1],
  likes: getRandomInteger(15, 200),
  comments:  {
    idComment: getRandomInteger(1, 200),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
});

const generatePhotos = () => {
  const photoArray = [];
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photoArray.push(createPhoto(i));
  }
  return photoArray;
};

generatePhotos();
