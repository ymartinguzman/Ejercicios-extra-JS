'use strict';

const writeThis = (word) => {
  return word;
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

// let list = '';

// function writeMyArray([]) {
//   for (let i = 0; i < list.length; i++) {
//     console.log(writeThis[i].text.myWordList[i].total);
//   }
// }
//writeMyArray();
