// script.js
// Simple JavaScript validation for Smart Study Hub registration

function validateForm(event) {
    event.preventDefault(); // stop page refresh
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      return false;
    }
  
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    alert("Registration successful!");
    return true;
  }
  