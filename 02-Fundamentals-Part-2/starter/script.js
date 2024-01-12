'use strict';

// const age = birthYear => 2024 - birthYear;

// console.log(birthYear => 2024 - Number(prompt('enter your age: ')));

// console.log(age);

// ---------------------------------------------------------------

function cutFruitPieces(fruit) {
  console.log('.. cutting the fruit into pieces');
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

// console.log(fruitProcessor(2,3));

// --------------------------------------------------------------

const avgScore = (a, b, c) => (a + b + c) / 3;

console.log(avgScore(44, 23, 71));

// --------------------------------------------------------------
// array

const years = new Array(1991, 2002, 2021, 2023);
console.log(years);
console.log(years.length);

