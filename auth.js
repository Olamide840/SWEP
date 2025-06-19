document.addEventListener("DOMContentLoaded", function () {
    // Signup Form Handling
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent page reload

            let username = document.getElementById("username").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();

            // Basic validation
            if (username.length < 8) {
                alert("Username must be at least 8 characters long!");
                return;
            }
  if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) { alert('Password must be at least 8 characters, contain at least one lowercase letter, one uppercase letter, and one number!');return;}           
  // Store user data in localStorage
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Signup successful! You can now login.");
            window.location.href = "code.html";
        });
    };
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let loginEmail = document.getElementById("email").value.trim();
            let loginPassword = document.getElementById("password").value.trim();

            // Retrieve stored data
            let storedEmail = localStorage.getItem("userEmail");
            let storedPassword = localStorage.getItem("userPassword");
            
            if (loginEmail === storedEmail && loginPassword === storedPassword) {
                alert("Login successful!");
                window.location.href = "general.html";
            } else {
                alert("Invalid email or password!");
            }
        });
    }
});
//show password
document.getElementById('show-password').addEventListener('change', function(event) { var passwordField = document.getElementById('password'); if (this.checked) {passwordField.type = 'text';} else {passwordField.type = 'password';}});