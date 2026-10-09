//filter
const randomNumbers = [2, 4, 6, 9, 11, 53, 78, 100, 101, 23];

const evenNumbers = randomNumbers.filter(number => number%2 === 0);
evenNumbers;

const oddNumbers = randomNumbers.filter(number => number%2 !== 0);
oddNumbers;

function getOddNumbers(array){
    return array.filter(number => Number.isInteger(number))
    .filter(number => number%2 !== 0);
}

const result = getOddNumbers(randomNumbers);
result;

const randomRealNumbers = [1,1.5,3.5,5,7,8,80,24,55,32,3.1416];
const resulRealNumbers = getOddNumbers(randomRealNumbers);
resulRealNumbers;

//map
//Not a number NaN
console.log(typeof NaN);
console.log(typeof Infinity);

function powerArray(array, exponent){
    return array.filter(number => (typeof number === 'number' && Number.isFinite(number)))
    .map(number => Math.pow(number, exponent));
}

console.log(powerArray(randomNumbers, 2));

//every
const areGraterThanOne = randomNumbers.every(number => (typeof number === 'number' && number > 1));
areGraterThanOne;

const areOddNumbers = randomNumbers.every(number => number%2 !== 0);
areOddNumbers;

//some
const atLeastOneOdd = randomNumbers.some(number => number%2 !== 0);
atLeastOneOdd;

//reduce
let count = 0; //previous
while(count < 10){
    count += 1; //current
}
count; //sumUp

const sumUp = randomNumbers.reduce((acc, val) => acc + val, 0);
sumUp;

const person = {
    name: 'Sebastian',
    nit: '123456789',
    role: 'sales',
    scores: [2,5,6,10]
}
//person.name
console.log(person['name']);

const notes = [{title: 'A'}, {title: 'B'}, {title: 'C'}, {title: 'C'}, {title: 'C'}, {title: 'C'}, {title: 'C'}, {title: 'C'}];
// -A-B-C
const string = `${notes[0].title}-${notes[1].title}-${notes[2].title}`;
string;

//acc = "";
// "" '-' title;
const concat = notes.reduce((acc, val) => acc + '-' + val.title, "").slice(1);
concat;


//destructuring

const fruits = ['Apple', 'Orange', 'Banana', 'Strawberry'];
console.log(fruits[3]);

//const apple = fruits[0];
//const orange = fruits[1];

const [apple, orange] = fruits;
apple;
orange;

const [apple2, , , strawberry] = fruits;
apple2;
strawberry;


//spread

const randomNotes = ['Note 1', 'Note 2', 'Note 3', 'Note 4'];
randomNotes.push('random');
const randomNotesCopy = [...randomNotes];
randomNotesCopy.push('Note 5');
randomNotesCopy;
randomNotes;

const randomNotesCopy2 = [...randomNotes, 'Note 6', 'Note 7'];
randomNotesCopy2;
