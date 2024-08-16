import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_ru43hnNt1AgCANGiWJttQGofvAy9CxE",
    authDomain: "singup-749bf.firebaseapp.com",
    projectId: "singup-749bf",
    storageBucket: "singup-749bf.appspot.com",
    messagingSenderId: "436450080810",
    appId: "1:436450080810:web:d03082cda73f44b5132b53",
    measurementId: "G-S4T0Y8PY30"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('sbtn');
    const showLoginButton = document.getElementById('showLogin');
    const showSignupButton = document.getElementById('showSignup');
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
    const signinFormContainer = document.getElementById('signinFormContainer');
    const signupFormContainer = document.querySelector('.form-container');

    if (signupButton) {
        signupButton.addEventListener('click', (event) => {
            event.preventDefault();

            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    const user = data.user;
                    Swal.fire({
                        icon: 'success',
                        title: 'Signup Successful',
                        text: `Welcome, ${username}! You have successfully signed up.`,
                    }).then(() => {
                        document.body.style.backgroundColor = "#DFF2BF";
                        signupForm.reset(); // Reset signup form fields
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.message,
                    });
                });
        });
    }

    if (showLoginButton) {
        showLoginButton.addEventListener('click', () => {
            signupFormContainer.style.display = 'none';
            signinFormContainer.style.display = 'block';
        });
    }

    if (showSignupButton) {
        showSignupButton.addEventListener('click', () => {
            signinFormContainer.style.display = 'none';
            signupFormContainer.style.display = 'block';
        });
    }

    const signinButton = document.getElementById('lbtn');
    if (signinButton) {
        signinButton.addEventListener('click', (event) => {
            event.preventDefault();

            let email = document.getElementById('signin-email').value;
            let password = document.getElementById('signin-password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sign In Successful',
                        text: `Welcome back! You have successfully signed in.`,
                    }).then(() => {
                        document.body.style.backgroundColor = "#DFF2BF";
                        signinForm.reset(); // Reset signin form fields
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.message,
                    });
                });
        });
    }
});