'use strict';

const writeThis = (word) => {
  return word;
};
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(writeThis('Patata ') + getRandomNumber(10));
console.log(writeThis('Aguacate ') + getRandomNumber(10));
console.log(writeThis('Pizza ') + +getRandomNumber(10));
