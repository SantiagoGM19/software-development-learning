//The Syntax
function greet() {
    console.log("Hello, welcome to the app!");
}

// Pushing the button (calling the function)
greet();

//Parameters -> The objects we pass to the function
function greetUser(name, lastName, age) {
    console.log(`Hello ${name}, ${lastName}, ${age}`);
}

//Arguments -> The actual value we pass to the function in order to execute it
greetUser("Santiago", "Gomez", 25);

//Returning values
function add(a, b) {
    if (a === 0){
        return b;
    }
    return a + b;
    console.log("This log will never execute");
}

let sum = add(0, 10);
console.log(sum * 2);

//Scope

let townSquare = "Public statue";

function privateHouse() {
    let secretPlace = "There's hidden gold here";
    console.log(townSquare);
}

privateHouse();

console.log(secretPlace);
