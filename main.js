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

let myWordList = [];

function getInfoApi(arr) {
  return fetch(
    `https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json`
  )
    .then((response) => response.json())
    .then((data) => {
      myWordList = data;
      console.log(data.results);
    });
}
console.log(getInfoApi(myWordList));

function writeMyArray(array) {
  for (let i = 0; i < myWordList.length; i++) {
    for (let x = 0; x < myWordList[i].total; x++) {
      writeThis(myWordList[i].text);
    }
  }
}

//console.log(getInfoApi(myWordList));

writeMyArray();
