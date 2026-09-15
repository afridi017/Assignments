// =====================================================
// JavaScript Assignment #1 - Basics & Hello World
// =====================================================

// ---------- Step 3: Hello World ----------

// Show "Hello World" as a popup dialog
alert("Hello World");

// Show "Hello World" in the browser console
console.log("Hello World");

// ---------- Step 4: Create Variables ----------

// var - older style, can be redeclared (try not to use often)
var studentName = "Ahmad Raza";

// let - modern style, value can be changed later
let courseName = "Web & Mobile App Development";

// let - batch number stored as a number
let batchNumber = 2024;

// const - value cannot be changed after it is set
const instituteName = "Saylani Mass IT Training";

// ---------- Step 5: Display Variable Data ----------

// Show all variables in the console
console.log("Student Name : " + studentName);
console.log("Course Name  : " + courseName);
console.log("Batch Number : " + batchNumber);
console.log("Institute    : " + instituteName);

// Show at least one variable value on the web page
// document.write() prints text directly onto the page
document.write("<p><b>Student:</b> " + studentName + "</p>");
document.write("<p><b>Course:</b> " + courseName + "</p>");
document.write("<p><b>Batch:</b> " + batchNumber + "</p>");
document.write("<p><b>Institute:</b> " + instituteName + "</p>");

// ---------- Step 6: Simple Practice Task ----------

// Change the value of a let variable and show the updated value
let score = 50;
console.log("Score (before) : " + score);
score = 90; // let can be updated
console.log("Score (after)  : " + score);

// Try to change the value of a const variable - look for the error!
try {
  instituteName = "ABC Institute"; // This line causes a TypeError
  console.log("Const changed to: " + instituteName);
} catch (error) {
  // The browser cannot change a const, so it throws an error here
  console.log("Error (const cannot be changed): " + error.message);
}
