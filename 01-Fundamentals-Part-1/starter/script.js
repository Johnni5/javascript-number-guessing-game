/* assigment 01 */
const country = 'germany';
const continent = 'europa';
let population = 84_433_656;
console.log(country, continent, population);

/* data types */
const isIsland = false;
let language;
console.log(`isle: ${isIsland}, Population: ${population}, Country: ${country}, Lang: ${language}`);

/* let const var */
language = 'german';
// country = 'spain';

/* basic ops */
console.log(population / 2);
console.log(population++);
let popFinnland = 6_000_000;
let popGermany = 84_432_656;
console.log(popFinnland < popGermany);
let avgCountry = 33_000_000;
console.log(avgCountry < popGermany);
const description = `Portugal is in Europe, and its 11 million people speak portuguese.`;

if (popGermany > avgCountry) {
  console.log(`Portugal's population is above average.`);
} else {
  console.log(`Portugal's population is 22 million below average.`);
}

/* type coerciosn */
let num1 = '19'-'13'+'17'; // 617
console.log(num1);

let num2 = '19'-'13'+17; // 23
console.log(num2);

const num3 = '123' < 57;
console.log(num3);

const num4 = 5 + 6 + '4' + 9 - 4 -2; // 1143
console.log(num4);


let weekDay = 'sunday';
if (weekDay === 'monday') {
  console.log('Get up and start the week!');
} else if (weekDay === 'tuesday') {
  console.log('Enjoy tuesday.');
} else if (weekDay === 'wednesday' || weekDay === 'thursday') {  
  console.log('Keep up the good work!.');
} else if (weekDay === 'friday') {
  console.log('Its firday! :)');
} else if (weekDay === 'saturday' || weekDay === 'sunday') {
  console.log('Its weekend time. Start learning :)');
} else if (weekDay === 'sunday') {
  console.log('Its sunday : enjoy your time off! :)');
} else {
  console.log('Error 123: idk + who are you?');
}