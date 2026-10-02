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

//reduce