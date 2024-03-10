document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm1 = document.getElementById('confirm1');
    const errorElements = document.querySelectorAll('.error');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirm1Value = confirm1.value.trim();

        if (usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
        } else {
            setSuccessFor(username);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else if (passwordValue.length < 8) {
            setErrorFor(password, 'Password must be at least 8 characters');
        } else {
            setSuccessFor(password);
        }
        if (confirm1Value === '') {
            setErrorFor(confirm1, 'Confirm Password cannot be blank');
        } else if (passwordValue !== confirm1Value) {
            setErrorFor(confirm1, 'Passwords do not match');
        } else {
            setSuccessFor(confirm1);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const error = formControl.querySelector('.error');
        formControl.className = 'form-floating mb-2 error';
        error.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-floating mb-2 success';
    }

    function isEmail(email) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
