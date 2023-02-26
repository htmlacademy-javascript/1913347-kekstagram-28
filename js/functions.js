function checkStringLength (string, length) {
    return (string.length <= length) ? true : false;
  }


function checkPalindrom (string) {
    string = string.toLocaleLowerCase().replaceAll(' ','');
    let reverseString = '';
    for (let i = string.length - 1; i >= 0 ; i--) {
      reverseString += string[i];
    }
    return (reverseString === string) ? true : false;
  }


function returnNumber (string) {
    if (typeof string != "string") {
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


function addSymbols (string, length, addedString) {
    if (string.length < length) {
      let newString = '';
      while (newString.length < length - string.length) {   
          newString = addedString.slice(0, length - string.length - newString.length) + newString
          }
      return newString + string
    } 
    return string;
  }