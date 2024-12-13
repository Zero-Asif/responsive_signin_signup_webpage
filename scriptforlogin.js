const container = document.querySelector('.container');
const signupBtn = document.querySelector('.signup-btn');
const signinBtn = document.querySelector('.signin-btn');

signupBtn.addEventListener('click', () => {
    container.classList.add('active');
});

signinBtn.addEventListener('click', () => {
    container.classList.remove('active');
});