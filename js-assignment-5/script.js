// Student Name: IB AFRIDI
// Course: Web & App Development (SMIT Batch 6)
// Assignment #5: Conditional Statements (if / else)

// ==========================================
// STEP 2: EMPLOYEE LOGIN SYSTEM
// ==========================================
console.log("=== STEP 2: EMPLOYEE LOGIN SYSTEM ===");

let isPasswordCorrect = true;

if (isPasswordCorrect) {
  console.log("Login Successful! Welcome to company portal.");
} else {
  console.log("Access Denied: Incorrect Password.");
}

// ==========================================
// STEP 3: ONLINE ORDER APPROVAL
// ==========================================
console.log("\n=== STEP 3: ONLINE ORDER APPROVAL ===");

let isPaymentDone = true;

if (isPaymentDone) {
  console.log("Order Status: Payment Received - Order Approved!");
} else {
  console.log("Order Status: Payment Pending - Order Rejected!");
}

// ==========================================
// STEP 4: STUDENT RESULT SYSTEM
// ==========================================
console.log("\n=== STEP 4: STUDENT RESULT SYSTEM ===");

let marks = 78;

if (marks >= 50) {
  console.log("Result: PASS (Marks: " + marks + ")");
} else {
  console.log("Result: FAIL (Marks: " + marks + ")");
}

// ==========================================
// STEP 5: OFFICE ATTENDANCE CHECK
// ==========================================
console.log("\n=== STEP 5: OFFICE ATTENDANCE CHECK ===");

let isOnTime = false;

if (isOnTime) {
  console.log("Attendance Status: Present");
} else {
  console.log("Attendance Status: Marked as Late / Absent");
}

// ==========================================
// STEP 6: DISCOUNT ELIGIBILITY
// ==========================================
console.log("\n=== STEP 6: DISCOUNT ELIGIBILITY ===");

let isPremiumUser = true;

if (isPremiumUser) {
  console.log("Discount Status: 20% Discount Applied!");
} else {
  console.log("Discount Status: No Discount Available for Regular Users.");
}

// ==========================================
// STEP 7: MULTIPLE CONDITIONS (else if)
// ==========================================
console.log("\n=== STEP 7: PERFORMANCE RATING SYSTEM ===");

let performanceScore = 85;

if (performanceScore >= 90) {
  console.log("Employee Performance Rating: Excellent 🌟");
} else if (performanceScore >= 70) {
  console.log("Employee Performance Rating: Good 👍");
} else if (performanceScore >= 50) {
  console.log("Employee Performance Rating: Average 😐");
} else {
  console.log("Employee Performance Rating: Poor ❌");
}
