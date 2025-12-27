// Project 18 JavaScript

const passwordInput = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

function generatePassword() {
    let charset = '';
    
    if (uppercaseCheck.checked) charset += uppercase;
    if (lowercaseCheck.checked) charset += lowercase;
    if (numbersCheck.checked) charset += numbers;
    if (symbolsCheck.checked) charset += symbols;
    
    if (charset === '') {
        alert('Please select at least one option');
        return;
    }
    
    const length = parseInt(lengthSlider.value);
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    passwordInput.value = password;
}

function copyPassword() {
    if (passwordInput.value === '') {
        alert('Generate a password first');
        return;
    }
    
    passwordInput.select();
    document.execCommand('copy');
    
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = 'Copy';
    }, 2000);
}

generatePassword();
