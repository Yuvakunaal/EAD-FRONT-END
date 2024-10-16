document.getElementById('signup').addEventListener('click', function() {
    window.location.href = "../signup/signup.html"; // Change "signup.html" to the URL of your sign-up page
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "6969") {
        window.location.href = "../home/home.html";
    } else {
        alert("Invalid username or password!");
    }
});

// Toggle password visibility
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash');
});

