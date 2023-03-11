const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const idList = [];

const getRandomId = (element) => {
  let randomId = 0;
  do {
    randomId = getRandomInteger(1, element);
  } while (idList.includes(randomId));
  idList.push(randomId);
  return randomId;
};

export {getRandomInteger};
export {getRandomArrayElement};
export {getRandomId};

