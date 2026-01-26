document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const passwordDisplay = document.getElementById('password');
            const lengthSlider = document.getElementById('length');
            const lengthValue = document.getElementById('length-value');
            const uppercaseCheckbox = document.getElementById('uppercase');
            const lowercaseCheckbox = document.getElementById('lowercase');
            const numbersCheckbox = document.getElementById('numbers');
            const symbolsCheckbox = document.getElementById('symbols');
            const generateButton = document.getElementById('generate');
            const resetButton = document.getElementById('reset');
            const copyButton = document.getElementById('copy');
            const notification = document.getElementById('notification');
            const strengthBar = document.getElementById('strength-bar');
            const strengthText = document.getElementById('strength-text');
            
            // Character sets
            const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
            const numberChars = '0123456789';
            const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            
            // Update length value display
            lengthSlider.addEventListener('input', function() {
                lengthValue.textContent = this.value;
            });
            
            // Generate password function
            function generatePassword() {
                let characterSet = '';
                let password = '';
                
                // Build character set based on selected options
                if (uppercaseCheckbox.checked) characterSet += uppercaseChars;
                if (lowercaseCheckbox.checked) characterSet += lowercaseChars;
                if (numbersCheckbox.checked) characterSet += numberChars;
                if (symbolsCheckbox.checked) characterSet += symbolChars;
                
                // Check if at least one character type is selected
                if (characterSet === '') {
                    passwordDisplay.textContent = 'Please select at least one character type';
                    passwordDisplay.style.color = '#ff6b6b';
                    updateStrengthIndicator(0);
                    return;
                }
                
                // Generate password
                const length = parseInt(lengthSlider.value);
                for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characterSet.length);
                    password += characterSet[randomIndex];
                }
                
                // Display password
                passwordDisplay.textContent = password;
                passwordDisplay.style.color = '#f8f9fa';
                
                // Update strength indicator
                updateStrengthIndicator(password);
            }
            
            // Update password strength indicator
            function updateStrengthIndicator(password) {
                let strength = 0;
                
                if (password.length >= 8) strength += 1;
                if (password.length >= 12) strength += 1;
                if (password.length >= 16) strength += 1;
                
                if (/[A-Z]/.test(password)) strength += 1;
                if (/[a-z]/.test(password)) strength += 1;
                if (/[0-9]/.test(password)) strength += 1;
                if (/[^A-Za-z0-9]/.test(password)) strength += 1;
                
                // Normalize strength to 0-4 scale
                strength = Math.min(strength, 4);
                
                // Update visual indicator
                const percent = (strength / 4) * 100;
                strengthBar.style.width = `${percent}%`;
                
                // Update colors and text
                if (strength <= 1) {
                    strengthBar.style.backgroundColor = '#ff6b6b';
                    strengthText.textContent = 'Password strength: Weak';
                    strengthText.style.color = '#ff6b6b';
                } else if (strength <= 2) {
                    strengthBar.style.backgroundColor = '#ffd93d';
                    strengthText.textContent = 'Password strength: Fair';
                    strengthText.style.color = '#ffd93d';
                } else if (strength <= 3) {
                    strengthBar.style.backgroundColor = '#4895ef';
                    strengthText.textContent = 'Password strength: Good';
                    strengthText.style.color = '#4895ef';
                } else {
                    strengthBar.style.backgroundColor = '#4bb543';
                    strengthText.textContent = 'Password strength: Strong';
                    strengthText.style.color = '#4bb543';
                }
            }
            
            // Copy password to clipboard
            function copyToClipboard() {
                const password = passwordDisplay.textContent;
                
                if (password === 'Your password will appear here' || password === 'Please select at least one character type') {
                    return;
                }
                
                navigator.clipboard.writeText(password).then(function() {
                    // Show notification
                    notification.classList.add('show');
                    setTimeout(function() {
                        notification.classList.remove('show');
                    }, 2000);
                });
            }
            
            // Reset form
            function resetForm() {
                lengthSlider.value = 12;
                lengthValue.textContent = '12';
                uppercaseCheckbox.checked = true;
                lowercaseCheckbox.checked = true;
                numbersCheckbox.checked = true;
                symbolsCheckbox.checked = false;
                passwordDisplay.textContent = 'Your password will appear here';
                passwordDisplay.style.color = '#f8f9fa';
                strengthBar.style.width = '0%';
                strengthText.textContent = 'Password strength: -';
                strengthText.style.color = '#e9ecef';
            }
            
            // Event listeners
            generateButton.addEventListener('click', generatePassword);
            resetButton.addEventListener('click', resetForm);
            copyButton.addEventListener('click', copyToClipboard);
            
            // Generate initial password on page load
            generatePassword();
        });