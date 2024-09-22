// Toggle between login and signup forms
const toggleSignup = document.getElementById('toggle-signup');
const toggleLogin = document.getElementById('toggle-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');

toggleSignup.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    formTitle.innerText = "Sign Up";
});

toggleLogin.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    formTitle.innerText = "Login";
});

// Password validation for signup
const signupBtn = document.getElementById('signup-btn');
signupBtn.addEventListener('click', (e) => {
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        e.preventDefault();
    }
});
