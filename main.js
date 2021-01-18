'use strict';

const writeThis = (word) => {
  return console.log(word);
};
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(writeThis('Patata ') + getRandomNumber(10));
console.log(writeThis('Aguacate ') + getRandomNumber(10));
console.log(writeThis('Pizza ') + getRandomNumber(10));

const myWordList = [
  {
    text: 'Pencil',
    total: 6,
  },
  {
    text: 'Thermo',
    total: 2,
  },
  {
    text: 'TV',
    total: 8,
  },
  {
    text: 'Phone',
    total: 4,
  },
];

function writeMyArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].total; x++) {
      writeThis(array[i].text);
    }
  }
}

writeMyArray(myWordList);
