// Selecting the existing buttons
const container = document.querySelector('.container');
const signupBtn = document.querySelector('.signup-btn');
const signinBtn = document.querySelector('.signin-btn');

// Selecting the new buttons for Tutor/Student
const signinTutorBtn = document.querySelector('.signin-tutor');
const signinStudentBtn = document.querySelector('.signin-student');
const signupTutorBtn = document.querySelector('.signup-tutor');
const signupStudentBtn = document.querySelector('.signup-student');

// Existing functionality for toggling between signin and signup forms
signupBtn.addEventListener('click', () => {
    container.classList.add('active');
});

signinBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// New functionality for Tutor/Student-specific buttons
signinTutorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Signing in as Tutor');
});

signinStudentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Signing in as Student');
});

signupTutorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Signing up as Tutor');
});

signupStudentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Signing up as Student');
});
