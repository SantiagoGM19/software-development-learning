// EXERCISE 1: Movie Ticket Pricing
// Task: Calculate the ticketPrice based on the age variable:
// - Under 5: Free ($0)
// - 5 to 17: Child discount ($10)
// - 18 to 64: Standard price ($20)
// - 65 and older: Senior discount ($12)
const age = 12;
let ticketPrice;

// EXERCISE 2: Access Control System
// Task: Determine if a user can access the admin system.
// Requirements:
// 1. User MUST be logged in (isLoggedIn === true).
// 2. User MUST be either an "admin" OR an "editor" to get full access.
const role = "admin"; // Options: "admin", "editor", "viewer"
const isLoggedIn = true;

// EXERCISE 3: Free Shipping & Discount Calculator
// Requirements:
// 1. If cartTotal is $100 or more, OR the user has VIP status (isVip === true), shipping is free ($0). Otherwise, shipping is $10.
// 2. If cartTotal is greater than $150 AND shipping is free, apply a $20 discount to the final total.
const cartTotal = 120;
const isVip = false;
let shippingFee;
let finalTotal;

// EXERCISE 4: Traffic Light Controller
// Requirements:
// Based on the lightColor variable ("red", "yellow", "green"):
// - "red" -> print "STOP"
// - "yellow" -> print "SLOW DOWN"
// - "green" -> print "GO"
// - Any other string -> print "INVALID LIGHT COLOR"
const lightColor = "yellow";

// EXERCISE 5: Leap Year Validator
// Requirements:
// A year is a leap year if:
// 1. It is divisible by 4 (year % 4 === 0) AND NOT divisible by 100 (year % 100 !== 0)
// OR
// 2. It is divisible by 400 (year % 400 === 0)
//
// Print "Leap Year" or "Not a Leap Year".

// EXERCISE 6: Alarm Setter
// Requirements:
// Days are represented as numbers: 1 (Mon) through 7 (Sun).
// - If it's a weekday (1 to 5) AND it's NOT a holiday (isHoliday === false), alarm is "7:00 AM".
// - If it's a weekend (6 or 7) OR it IS a holiday, alarm is "10:00 AM".
const dayOfWeek = 3; // Wednesday
const isHoliday = false;
let alarmTime;

// EXERCISE 7: ATM Withdrawal
// Requirements:
// 1. Check if requestedAmount is a multiple of 10 (requestedAmount % 10 === 0). If not, print "Error: Must withdraw in multiples of $10".
// 2. If valid multiple, check if accountBalance >= requestedAmount. If not, print "Error: Insufficient funds".
// 3. If both pass, deduct requestedAmount from accountBalance and print "Withdrawal successful! Remaining balance: $X".
const accountBalance = 100;
const requestedAmount = 45;