// Student Name: IB AFRIDI
// Course: Web & App Development (SMIT Batch 6)
// Assignment #4: Logical Operators

// ==========================================
// STEP 2: LOGICAL AND (&&) - Exam Entry
// ==========================================
console.log("=== STEP 2: LOGICAL AND (&&) ===");

let age = 19;
let feePaid = true;

// Both conditions must be true to pass
let canEnterExam = age >= 18 && feePaid === true;
console.log("Allowed to enter exam room:", canEnterExam);
// Explanation: Age is 19 (>= 18 is true) AND feePaid is true. Since both are true, result is true.

// ==========================================
// STEP 3: LOGICAL OR (||) - Login Check
// ==========================================
console.log("\n=== STEP 3: LOGICAL OR (||) ===");

let emailCorrect = false;
let phoneCorrect = true;

// At least one condition must be true
let canLogin = emailCorrect || phoneCorrect;
console.log("User login successful:", canLogin);
// Explanation: Email is false, but phone number is correct (true). Since one condition is true, || allows login (true).

// ==========================================
// STEP 4: LOGICAL NOT (!) - Block Check
// ==========================================
console.log("\n=== STEP 4: LOGICAL NOT (!) ===");

let isBlocked = false;

// Reverses the boolean value
let hasAccess = !isBlocked;
console.log("Website access allowed:", hasAccess);
// Explanation: isBlocked is false. !isBlocked flips it to true, so access is allowed.

// ==========================================
// STEP 5: COMBINE LOGICAL OPERATORS - Discount
// ==========================================
console.log("\n=== STEP 5: COMBINE LOGICAL OPERATORS ===");

let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

// User must be logged in AND (either premium OR has coupon)
let getSpecialDiscount = isLoggedIn && (isPremium || hasCoupon);
console.log("Special discount granted:", getSpecialDiscount);
// Explanation: isLoggedIn is true. (isPremium || hasCoupon) is (false || true) which equals true.
// So true && true = true. Discount is granted!

// ==========================================
// STEP 6: PRACTICE TASK (Changing Values)
// ==========================================
console.log("\n=== STEP 6: PRACTICE TASK ===");

// Test 1: Exam Entry with unpaid fee
let studentAge = 20;
let isFeePaid = false;
let examAllowed = studentAge >= 18 && isFeePaid;
console.log("Test 1 (Fee not paid):", examAllowed);
// Result: false, because fee is not paid even though age is above 18.

// Test 2: Login with both inputs incorrect
let isEmailValid = false;
let isPhoneValid = false;
let loginAllowed = isEmailValid || isPhoneValid;
console.log("Test 2 (Both inputs wrong):", loginAllowed);
// Result: false, because neither email nor phone is correct.

// Test 3: Discount for non-logged-in user
let userLoggedIn = false;
let userPremium = true;
let userHasCoupon = true;
let discountGranted = userLoggedIn && (userPremium || userHasCoupon);
console.log("Test 3 (User not logged in):", discountGranted);
// Result: false, because user must be logged in first, regardless of premium status or coupon.
