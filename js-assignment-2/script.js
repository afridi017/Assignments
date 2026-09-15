// =====================================================
// JavaScript Assignment #2 - Data Types & Type Conversion
// =====================================================

// ---------- Step 2: JavaScript Data Types ----------

// STRING - text value (words / characters)
var myName = "Ahmad Raza";
let myCity = "Peshawar";

// NUMBER - numeric value
let myAge = 21;
let productPrice = 2499.99;

// BOOLEAN - true or false
let isStudent = true;
let isMarried = false;

// UNDEFINED - declared but no value assigned yet
let favoriteColor;

// NULL - intentionally empty value
let middleName = null;

console.log("===== Step 2 & 3: Data Types =====");

// ---------- Step 3: Check Data Type with typeof ----------
console.log("myName        = " + myName + "  | type = " + typeof myName);
console.log("myCity        = " + myCity + "  | type = " + typeof myCity);
console.log("myAge         = " + myAge + "  | type = " + typeof myAge);
console.log(
  "productPrice  = " + productPrice + "  | type = " + typeof productPrice,
);
console.log("isStudent     = " + isStudent + "  | type = " + typeof isStudent);
console.log("isMarried     = " + isMarried + "  | type = " + typeof isMarried);
console.log(
  "favoriteColor = " + favoriteColor + "  | type = " + typeof favoriteColor,
);
console.log(
  "middleName    = " + middleName + "  | type = " + typeof middleName,
);

// ---------- Step 4: Convert Data Types (Type Conversion) ----------

console.log("");
console.log("===== Step 4 & 5: Type Conversion =====");

// 1) Convert STRING to NUMBER using Number()
let strNumber = "25"; // string
let convertedNumber = Number(strNumber); // number 25
console.log('String to Number : "' + strNumber + '"  ->  ' + convertedNumber);
console.log("New type         : " + typeof convertedNumber);

// 2) Convert NUMBER to STRING using String()
let numberValue = 100; // number
let convertedString = String(numberValue); // string "100"
console.log(
  "Number to String : " + numberValue + '  ->  "' + convertedString + '"',
);
console.log("New type         : " + typeof convertedString);

// 3) Convert STRING to BOOLEAN using Boolean()
let strBool = "true"; // looks like a boolean but it is a string
let convertedBool = Boolean(strBool); // boolean true
console.log('String to Boolean: "' + strBool + '"  ->  ' + convertedBool);
console.log("New type         : " + typeof convertedBool);

// ---------- Step 6: Practice Task (Important) ----------

console.log("");
console.log("===== Step 6: Practice Task =====");

// 1) Convert a NON-NUMERIC string into a number
// Observation: "abc" cannot be converted to a number, so JavaScript
// returns NaN (Not-a-Number). The program does not crash, but the
// result is useless for math.
let badString = "abc";
let badNumber = Number(badString);
console.log('"abc" converted to number = ' + badNumber);
console.log("Type of that result      = " + typeof badNumber);
// Observation: typeof NaN is "number", but the value is not a real number.

// 2) Convert 0 and 1 into boolean
// Observation: 0 is treated as "falsy" -> false
//              1 is treated as "truthy" -> true
let zeroToBool = Boolean(0);
let oneToBool = Boolean(1);
console.log("Boolean(0) = " + zeroToBool);
console.log("Boolean(1) = " + oneToBool);

// BONUS: every non-empty string converts to true, even "false"
let funnyBool = Boolean("false"); // a non-empty STRING is always truthy
console.log('Boolean("false") = ' + funnyBool);
// Observation: the word "false" as a string is still a real value,
// so it converts to true. Only the boolean false (or 0) is falsy.
