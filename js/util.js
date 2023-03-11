const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const idCommentsList = [];

const getRandomId = (element, list) => {
  let randomId = 0;
  do {
    randomId = getRandomInteger(1, element);
  } while (list.includes(randomId));
  list.push(randomId);
  return randomId;
};

const getRandomComment = (messages, names) => {
  const comments = [];
  for (let i = 0; i < getRandomInteger(1, 200); i++) {
    comments.push({
      idComment: getRandomId(6000, idCommentsList),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomArrayElement(messages),
      name: getRandomArrayElement(names),
    });
  }
  return comments;
};

export {getRandomInteger};
export {getRandomArrayElement};
export {getRandomId};
export {getRandomComment};

