/**
 * Duplicate Detector:
 * 
 * Write a function called hasDuplicates(numbers) that takes an array of numbers and 
 * returns true if any number appears more than once, or false if all elements are unique.
 * 
 * Rules: Do not use built-in helpers like Set or .indexOf() shortcuts; use standard loops and conditions.
 * 
 * Examples:
 * hasDuplicates([1, 2, 3, 4]) -> false
 * hasDuplicates([10, 5, 8, 5, 2]) -> true
 */

//hasDuplicates([1, 2, 3, 4]);
//i = 4; numbers[i] = 4;
//j = 4; numbers[j] = ;
//

function hasDuplicates(numbers){
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                return true;
            }
        }
    }
    return false;
}

const r1 = hasDuplicates([1, 2, 3, 4]);
console.log(r1);