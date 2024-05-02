// Form validation logic for signup form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform validation
    if (username === '') {
        showError('username', 'Username is required');
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long');
    } else {
        // If all validation passes, submit the form
        this.submit();
    }
});

// Function to display error messages
function showError(inputId, message) {
    var inputField = document.getElementById(inputId);
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    var parentDiv = inputField.parentElement;
    parentDiv.appendChild(errorDiv);
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
