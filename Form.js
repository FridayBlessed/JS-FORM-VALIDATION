document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const userDetailsSection = document.getElementById('user-details');

    // User object to store details
    const user = {
        username: '',
        email: '',
        password: ''
    };

    // Validation functions
    function validateUsername(username) {
        const usernameError = document.getElementById('username-error');
        if (username.length >= 10) {
            usernameError.textContent = 'Username must be less than 10 characters';
            return false;
        }
        usernameError.textContent = '';
        return true;
    }

    function validatePassword(password, confirmPassword) {
        const passwordError = document.getElementById('password-error');
        const confirmPasswordError = document.getElementById('confirm-password-error');

        if (password.length <= 6) {
            passwordError.textContent = 'Password must be greater than 6 characters';
            return false;
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            return false;
        }

        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        return true;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validate inputs
        const isUsernameValid = validateUsername(username);
        const isPasswordValid = validatePassword(password, confirmPassword);

        if (isUsernameValid && isPasswordValid) {
            // Store user details
            user.username = username;
            user.email = email;
            user.password = password;

            // Display user details
            document.getElementById('display-username').textContent = `Username: ${user.username}`;
            document.getElementById('display-email').textContent = `Email: ${user.email}`;
            userDetailsSection.style.display = 'block';
        } else {
            userDetailsSection.style.display = 'none';
        }
    });
});