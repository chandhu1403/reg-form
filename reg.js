// script.js
const form = document.getElementById('registration-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate email (you can add more validation rules)
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password (you can add more rules)
    if (passwordInput.value.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Form is valid, submit it or perform other actions
    console.log('Form submitted successfully!');
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
