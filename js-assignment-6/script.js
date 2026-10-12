// Student Name: IB AFRIDI
// Course: Web & App Development (SMIT Batch 6)
// Assignment #6: Switch Statement (Using prompt & alert)

// ==========================================
// STEP 2: EMPLOYEE ROLE ACCESS SYSTEM
// ==========================================
let roleInput = prompt(
  "Enter your role (admin / manager / developer / intern):",
);

// Convert input to lowercase to handle capital letters
let role = roleInput ? roleInput.toLowerCase().trim() : "";

switch (role) {
  case "admin":
    alert("Access Level: Full system access granted.");
    break;
  case "manager":
    alert("Access Level: Team management access granted.");
    break;
  case "developer":
    alert("Access Level: Code repository access granted.");
    break;
  case "intern":
    alert("Access Level: Limited view-only access granted.");
    break;
  default:
    alert("Invalid Role! Access denied. Please try again.");
    break;
}

// ==========================================
// STEP 3: ONLINE PAYMENT METHOD SELECTION
// ==========================================
let paymentInput = prompt(
  "Choose payment method (credit / debit / upi / cod):",
);

let paymentMethod = paymentInput ? paymentInput.toLowerCase().trim() : "";

switch (paymentMethod) {
  case "credit":
    alert("You selected Credit Card. Redirecting to secure gateway...");
    break;
  case "debit":
    alert("You selected Debit Card. Please enter your card details.");
    break;
  case "upi":
    alert("You selected UPI. Scan the QR code to complete payment.");
    break;
  case "cod":
    alert("You selected Cash on Delivery. Pay when your order arrives!");
    break;
  default:
    alert("Invalid Payment Method! Please select a valid option.");
    break;
}

// ==========================================
// STEP 4: ORDER STATUS CHECKER
// ==========================================
let statusInput = prompt(
  "Enter order status (placed / packed / shipped / delivered / cancelled):",
);

let orderStatus = statusInput ? statusInput.toLowerCase().trim() : "";

switch (orderStatus) {
  case "placed":
    alert("Order Status: Your order has been placed successfully.");
    break;
  case "packed":
    alert("Order Status: Your order is packed and ready for dispatch.");
    break;
  case "shipped":
    alert("Order Status: Your order is on the way!");
    break;
  case "delivered":
    alert("Order Status: Your order has been delivered. Enjoy!");
    break;
  case "cancelled":
    alert("Order Status: This order was cancelled.");
    break;
  default:
    alert("Invalid Order Status! Please check your order ID.");
    break;
}

// ==========================================
// STEP 5: OFFICE WORKING DAY CHECKER
// ==========================================
let dayInput = prompt("Enter day name (Monday - Sunday):");

let day = dayInput ? dayInput.toLowerCase().trim() : "";

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert("Day Status: Official Working Day (9 AM - 5 PM).");
    break;
  case "saturday":
    alert("Day Status: Half Day / Maintenance Day.");
    break;
  case "sunday":
    alert("Day Status: Weekend Holiday! Enjoy your day off.");
    break;
  default:
    alert("Invalid Day Input! Please enter a valid day of the week.");
    break;
}
