//How to create
const colors = ["red", "green", "yellow"];
colors;

const colorsObject = new Array();
colorsObject;
colorsObject.push("red", "green", "yellow");

colorsObject;
colorsObject.push(5);
colorsObject;

//How to access
const color = colors[1];
color;

//Checking
const n = true;
console.log(typeof n);
console.log(typeof colors);

console.log(Array.isArray(colors));

const object = {};
console.log(Array.isArray(object));

//Array methods
//push
const numbers = [1,2,3,4,5,6,7,8];
numbers.push(200);
numbers;

//pop
const number = numbers.pop();
numbers;
number;

//shift
const number2 = numbers.shift();
numbers;
number2;

//unshift
numbers.unshift(50);
numbers;

//splice
numbers.splice(4, 1, 500);
numbers;

//Iteration

for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    element = element * 2;
    console.log(element);
}

numbers.forEach(number => number += 1);

const f = number => number/2; //inline functions

console.log(f(2));

