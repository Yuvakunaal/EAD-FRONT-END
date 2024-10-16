document.getElementById('login').addEventListener('click', function() {
    window.location.href = "../login/login.html"; // Redirect to login page
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('emailid').value.trim(); // Get the email input value
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const passwordError = document.getElementById('passwordError');
    const matchIcon = document.getElementById('matchIcon');
    const mismatchIcon = document.getElementById('mismatchIcon');
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError'); // Get username error element
    const emailError = document.getElementById('emailidError'); // Get email error element

    // Clear any previous error messages and icons
    passwordError.style.display = "none";
    matchIcon.style.display = "none";
    mismatchIcon.style.display = "none";
    usernameError.style.display = "none"; // Hide username error by default
    emailError.style.display = "none"; // Hide email error by default

    // Validate username length
    if (username.length < 5 || username.length > 15) {
        usernameError.textContent = "Username must be between 5 and 15 characters."; // Set error message
        usernameError.style.display = "block"; // Show the error message
        usernameInput.focus(); // Focus on username input
        return; // Stop further execution
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address."; // Set error message
        emailError.style.display = "block"; // Show the error message
        document.getElementById('emailid').focus(); // Focus on email input
        return; // Stop further execution
    }

    // Check password match
    if (password === confirmPassword) {
        passwordError.textContent = "Passwords match!";
        passwordError.style.color = "green"; // Set color to green
        passwordError.style.display = "block"; // Show the message
        matchIcon.style.display = "inline"; // Show tick icon
        mismatchIcon.style.display = "none"; // Hide cross icon
        window.location.href = "../login/login.html"; // Redirect to login page
    } else {
        passwordError.textContent = "Passwords do not match!";
        passwordError.style.color = "red"; // Set color to red
        passwordError.style.display = "block"; // Show the message
        matchIcon.style.display = "none"; // Hide tick icon
        mismatchIcon.style.display = "inline"; // Show cross icon
    }
});

// Toggle password visibility
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Toggle visibility for confirm password
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPasswordInput = document.querySelector('#confirmPassword');

toggleConfirmPassword.addEventListener('click', function () {
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Real-time password matching validation
confirmPasswordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        matchIcon.style.display = "inline"; // Show tick icon
        mismatchIcon.style.display = "none"; // Hide cross icon
    } else {
        matchIcon.style.display = "none"; // Hide tick icon
        mismatchIcon.style.display = "inline"; // Show cross icon
    }
});
