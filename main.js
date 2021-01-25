'use strict';

const writeThis = (word) => {
  return console.log(word);
};
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let myWordList = [];

function getInfoApi(arr) {
  return fetch(
    `https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json`
  )
    .then((response) => response.json())
    .then((data) => {
      myWordList = data.results;
      console.log(myWordList);
      writeMyArray();
    });
}

function writeMyArray() {
  for (let i = 0; i < myWordList.length; i++) {
    console.log(myWordList[i].text, myWordList[i].total);
  }
}

getInfoApi(myWordList);
