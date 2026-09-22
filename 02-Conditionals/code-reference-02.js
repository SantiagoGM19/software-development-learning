
//Strict Equality (recommended)
5 === 5;        // true  (same type, same value)
5 === "5";      // false (number vs string -> immediate false)
true === 1;     // false (boolean vs number -> immediate false)
null === undefined; // false (different types)

//Loose Equality
5 == "5";       // true  (JS converts the string "5" to number 5)
true == 1;      // true  (JS converts true to number 1)
false == 0;     // true  (JS converts false to number 0)
"" == 0;        // true  (JS converts empty string to 0)
null == undefined; // true (Special rule in JS coercion table)

//Strict Inequality (Are these different in value OR different in type?)
5 !== "5";      // true  (They are different types, so they are NOT strictly equal)
5 !== 5;        // false (They are identical in type and value)
true !== 1;     // true  (Boolean vs Number are different)

//Loose Inequality (Are these different in value AFTER converting them to the same type?)
5 != "5";       // false (JS converts "5" to 5, so they are equal -> not different)
true != 1;      // false (JS converts true to 1, so they are equal -> not different)
5 != 6;         // true  (Values are genuinely different)


//IF-ELSE

const accountBalance = 1000;
const productPrice = 500;

if (accountBalance >= productPrice) {
    console.log("Purchase approved!");
} else {
    console.log("Decline: Insufficient funds.");
}

// MULTIPLE CONDITIONS IF-ELSE IF- ELSE

const score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// --- 4. LOGICAL OPERATORS (AND / OR) ---
const hasLicense = true;
const isSober = true;
const hasInsurance = false;

// AND (&&): All must be true
if (hasLicense && isSober) {
  console.log("Allowed to drive.");
}

// OR (||): At least one must be true
if (hasLicense || hasInsurance) {
  console.log("Driver has at least basic verification.");
}


// Priority Discret maths

//1 (Highest): ()
//2: %, *, /
//3: +, -
//4: ===, !==, >, < 
//5 && AND
//6 (Lowest) || OR

const isLoggedIn = false;
const isAdmin = false;
const isVIP = true;

// Expression 1: (isLoggedIn && isAdmin) || isVIP
const access1 = isLoggedIn && isAdmin || isVIP;
console.log(access1); // OUTPUT: true  (BUG! User is NOT logged in, but got access!)

// Expression 2: isLoggedIn && (isAdmin || isVIP)
const access2 = isLoggedIn && (isAdmin || isVIP);
console.log(access2); // OUTPUT: false (CORRECT! User must be logged in first.)
