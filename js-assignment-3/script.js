// Name: IB AFRIDI
// Course: Web & App Development (SMIT Batch 6)
// Assignment #3: Operators & Expressions


// ==========================================
// STEP 2: ARITHMETIC OPERATORS
// ==========================================
console.log("=== STEP 2: ARITHMETIC OPERATORS ===");

let a = 20;
let b = 6;

// Addition (+)
let sum = a + b;
console.log("Addition (a + b):", sum);

// Subtraction (-)
let difference = a - b;
console.log("Subtraction (a - b):", difference);

// Multiplication (*)
let product = a * b;
console.log("Multiplication (a * b):", product);

// Division (/)
let quotient = a / b;
console.log("Division (a / b):", quotient);

// Modulus (%) - Returns remainder
let remainder = a % b;
console.log("Modulus (a % b):", remainder);


// ==========================================
// STEP 3: ASSIGNMENT OPERATORS
// ==========================================
console.log("\n=== STEP 3: ASSIGNMENT OPERATORS ===");

// Simple assignment (=)
let score = 50;
console.log("Initial score:", score);

// Add and assign (+=)
score += 10; // score = score + 10
console.log("After score += 10:", score);

// Subtract and assign (-=)
score -= 5; // score = score - 5
console.log("After score -= 5:", score);

// Multiply and assign (*=)
score *= 2; // score = score * 2
console.log("After score *= 2:", score);

// Divide and assign (/=)
score /= 3; // score = score / 3
console.log("After score /= 3:", score);


// ==========================================
// STEP 4: COMPARISON OPERATORS
// ==========================================
console.log("\n=== STEP 4: COMPARISON OPERATORS ===");

let num1 = 15;
let num2 = 10;

// Equal to (==)
console.log("num1 == num2:", num1 == num2);

// Strict equal to (===)
console.log("num1 === num2:", num1 === num2);

// Not equal (!=)
console.log("num1 != num2:", num1 != num2);

// Greater than (>)
console.log("num1 > num2:", num1 > num2);

// Less than (<)
console.log("num1 < num2:", num1 < num2);

// Greater than or equal to (>=)
console.log("num1 >= num2:", num1 >= num2);

// Less than or equal to (<=)
console.log("num1 <= num2:", num1 <= num2);


// ==========================================
// STEP 5: EXPRESSIONS
// ==========================================
console.log("\n=== STEP 5: EXPRESSIONS ===");

// Expression 1: Total price calculation
let price = 250;
let quantity = 4;
let totalPrice = price * quantity;
console.log("Total Price (price * quantity):", totalPrice);

// Expression 2: Final score calculation
let marks1 = 85;
let marks2 = 90;
let marks3 = 78;
let finalScore = marks1 + marks2 + marks3;
console.log("Final Score (marks1 + marks2 + marks3):", finalScore);


// ==========================================
// STEP 6: PRACTICE TASK (== vs ===)
// ==========================================
console.log("\n=== STEP 6: PRACTICE TASK (== vs ===) ===");

let strNum = "10";
let realNum = 10;

// Comparing with == (Loose equality)
console.log('"10" == 10 :', strNum == realNum); 
// Result is true because == converts the string "10" to number 10 before checking.

// Comparing with === (Strict equality)
console.log('"10" === 10 :', strNum === realNum); 
// Result is false because === checks both value and data type. 
// "10" is a string and 10 is a number, so they are not strictly equal.

/*
  MY UNDERSTANDING:
  - '==' checks only the value and ignores data type (Type Coercion).
  - '===' checks both value AND data type strictly.
*/