function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


function checkPalindrom (string) {
  string = string.toLocaleLowerCase().replaceAll(' ','');
  let reverseString = '';
  for (let i = string.length - 1; i >= 0 ; i--) {
    reverseString += string[i];
  }
  return reverseString === string;
}

checkPalindrom('топот');
checkPalindrom('ДовОд');
checkPalindrom('Кекс');
checkPalindrom('Лёша на полке клопа нашёл ');

function returnNumber (string) {
  if (typeof string !== 'string') {
    string = string.toString();
  }
  string = string.replaceAll(' ','');
  let number = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i])) {
      number += string[i];
    }
  }
  return parseFloat(number);
}

returnNumber('2023 год');
returnNumber('ECMAScript 2022');
returnNumber('1 кефир, 0.5 батона');
returnNumber('агент 007');
returnNumber('а я томат');
returnNumber(2023);
returnNumber(-1);
returnNumber(1.5);


function addSymbols (string, length, addedString) {
  if (string.length < length) {
    let newString = '';
    while (newString.length < length - string.length) {
      newString = addedString.slice(0, length - string.length - newString.length) + newString;
    }
    return newString + string;
  }
  return string;
}

addSymbols('1', 2, '0');
addSymbols('1', 4, '0');
addSymbols('q', 4, 'werty');
addSymbols('q', 4, 'we');
addSymbols('qwerty', 4, '0');
