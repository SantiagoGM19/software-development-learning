/**
  Practice Challenge: Building a Smart Calculator
  
  Functions allow us to write code once and reuse it with different data. In this exercise, you will 
  start with rigid functions, see why they become unmanageable, and refactor them into a 
  flexible, reusable calculator.
  
  Part 1: The Hardcoded Way
  
  1. Write a function called addTwoAndSeven. Inside it, calculate the sum of 2 and 7, 
  and log the result to the console.
  2. Call addTwoAndSeven().
  3. Write a second function called addTenAndFive. Inside it, calculate the sum of 10 and 5, 
  and log the result to the console.
  4. Call addTenAndFive().
  
  Pause & Reflect: If you need to add 50 different pairs of numbers, writing 50 
  separate functions would clutter your codebase. How can one function adapt 
  to any numbers given to it?
  
  Part 2: Introducing Parameters
  Instead of hardcoding values inside the body, pass values dynamically via parameters.
  
  1. Write a single function named add that accepts two parameters: num1 and num2.
  2. Inside the function, add num1 and num2 together and log the result using console.log().
  3. Test your function with both previous pairs and one new pair:
  - add(2, 7)
  - add(10, 5)
  - add(100, 250)
  
  Part 3: Completing the Calculator Suite
  Now create dedicated functions for the rest of your operations. Each function must take its
  required arguments, compute the value, and log the outcome.
  
  - Subtraction: subtract(num1, num2) -> logs the difference (num1 - num2)
  - Multiplication: multiply(num1, num2) -> logs the product (num1 x num2)
  - Division with Validation: divide(num1, num2)
       - Check if num2 === 0.
       - If it is 0, do not attempt the calculation; log an error message string (e.g., "Error: Cannot divide by zero").
       - Otherwise, log the result of num1 / num2.
  - Power: power(base, exponent) -> logs the base raised to the exponent (Hint: use ** or Math.pow()).
  - Square Root: squareRoot(num) -> accepts one parameter and logs its square root (Hint: use Math.sqrt()).
  
  Part 4: Run the Test Suite
  Call all functions in your console to confirm expected behaviors, especially both division cases:
  
    add(12, 4);          // Expected: 16
    subtract(12, 4);     // Expected: 8
    multiply(12, 4);     // Expected: 48
    divide(12, 4);       // Expected: 3
    divide(12, 0);       // Expected: "Error: Cannot divide by zero"
    power(2, 3);         // Expected: 8
    squareRoot(64);      // Expected: 8
 */