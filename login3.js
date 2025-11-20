
        (function() {
            // Enhanced form elements
            const form = document.querySelector('.dripspaceNavbar-loginForm');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const loginButton = document.getElementById('loginButton');
            const passwordToggle = document.getElementById('passwordToggle');
            const errorMessage = document.getElementById('errorMessage');
            const successState = document.getElementById('successState');
            
            // Enhanced password visibility toggle with animation
            passwordToggle.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                // Enhanced icon toggle with smooth transition
                if (type === 'text') {
                    passwordToggle.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.94 17.94C16.1836 19.4379 14.0174 20.2697 11.76 20.27C5.16 20.27 1.22 13.06 1.22 13.06C2.28182 9.9207 4.3698 7.32071 6.99 5.75C7.59 5.5 8.21 5.35 8.85 5.27C9.45 5.19 10.06 5.15 10.68 5.15C10.75 5.15 10.82 5.15 10.89 5.16C10.95 5.16 11.01 5.17 11.07 5.17C11.4 5.21 11.72 5.25 12.04 5.32C12.19 5.35 12.34 5.39 12.49 5.43C12.84 5.55 13.18 5.7 13.51 5.87C13.84 6.04 14.16 6.24 14.46 6.46C14.8 6.71 15.11 6.99 15.39 7.29C15.7 7.61 15.97 7.96 16.2 8.33C16.47 8.74 16.7 9.17 16.89 9.63C17.1 10.11 17.27 10.61 17.39 11.12C17.54 11.73 17.64 12.36 17.69 13C17.73 13.54 17.76 14.09 17.76 14.65C17.76 15.79 17.65 16.89 17.46 17.94H17.94Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 1L23 23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                } else {
                    passwordToggle.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                }
                
                // Add click animation
                passwordToggle.style.transform = 'translateY(-50%) scale(0.9)';
                setTimeout(() => {
                    passwordToggle.style.transform = 'translateY(-50%) scale(1)';
                }, 150);
            });
            
            // Enhanced email validation
            function validateEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
            
            // Enhanced form validation with better UX
            function validateForm() {
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim();
                
                // Remove previous states
                emailInput.classList.remove('error', 'success');
                passwordInput.classList.remove('error', 'success');
                
                let isValid = true;
                let errorText = '';
                
                if (!email) {
                    emailInput.classList.add('error');
                    errorText = 'Please enter your email address.';
                    isValid = false;
                } else if (!validateEmail(email)) {
                    emailInput.classList.add('error');
                    errorText = 'Please enter a valid email address.';
                    isValid = false;
                } else {
                    emailInput.classList.add('success');
                }
                
                if (!password) {
                    passwordInput.classList.add('error');
                    if (!errorText) errorText = 'Please enter your password.';
                    isValid = false;
                } else if (password.length < 6) {
                    passwordInput.classList.add('error');
                    if (!errorText) errorText = 'Password must be at least 6 characters long.';
                    isValid = false;
                } else {
                    passwordInput.classList.add('success');
                }
                
                if (!isValid) {
                    showError(errorText);
                } else {
                    hideError();
                }
                
                return isValid;
            }
            
            // Enhanced error display
            function showError(message) {
                errorMessage.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/>
                            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        ${message}
                    </div>
                `;
                errorMessage.classList.add('show');
            }
            
            function hideError() {
                errorMessage.classList.remove('show');
            }
            
            // Enhanced real-time validation with better feedback
            emailInput.addEventListener('input', function() {
                const value = this.value.trim();
                
                if (value && validateEmail(value)) {
                    this.classList.add('success');
                    this.classList.remove('error');
                } else if (value) {
                    this.classList.add('error');
                    this.classList.remove('success');
                } else {
                    this.classList.remove('error', 'success');
                }
                
                // Auto-hide error when user starts typing valid input
                if (errorMessage.classList.contains('show') && value && validateEmail(value)) {
                    setTimeout(() => {
                        if (emailInput.classList.contains('success')) {
                            hideError();
                        }
                    }, 500);
                }
            });
            
            passwordInput.addEventListener('input', function() {
                const value = this.value.trim();
                
                if (value.length >= 6) {
                    this.classList.add('success');
                    this.classList.remove('error');
                } else if (value) {
                    this.classList.add('error');
                    this.classList.remove('success');
                } else {
                    this.classList.remove('error', 'success');
                }
                
                // Auto-hide error when user types valid password
                if (errorMessage.classList.contains('show') && value.length >= 6) {
                    setTimeout(() => {
                        if (passwordInput.classList.contains('success')) {
                            hideError();
                        }
                    }, 500);
                }
            });
            
            // Enhanced form submission with success state
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (!validateForm()) {
                    return;
                }
                
                // Show enhanced loading state
                loginButton.classList.add('loading');
                loginButton.disabled = true;
                hideError();
                
                // Simulate API call
                setTimeout(() => {
                    const email = emailInput.value.trim();
                    const password = passwordInput.value.trim();
                    const rememberMe = document.getElementById('rememberMe').checked;
                    
                    // Simulate successful login
                    if (email === 'demo@dripspace.com' && password === 'demospace') {
                        // Show success state
                        form.style.opacity = '0';
                        form.style.transform = 'translateY(-20px)';
                        
                        setTimeout(() => {
                            form.style.display = 'none';
                            successState.classList.add('show');
                        }, 300);
                        
                        setTimeout(() => {
                            console.log('Login successful:', { email, rememberMe });
                            // Here you would redirect to the dashboard
                            // window.location.href = '/dashboard';
                        }, 2500);
                    } else {
                        // Reset button and show error
                        loginButton.classList.remove('loading');
                        loginButton.disabled = false;
                        showError('Invalid credentials. Try demo@dripspace.com / demospace');
                    }
                }, 2000);
            });
            
            // Enhanced social login handlers
            document.getElementById('googleLogin').addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = '<div style="width: 20px; height: 20px; border: 2px solid #4285F4; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div> Connecting...';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    console.log('Google OAuth login initiated');
                }, 2000);
            });
            
            document.getElementById('appleLogin').addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = '<div style="width: 20px; height: 20px; border: 2px solid currentColor; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div> Connecting...';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    console.log('Apple ID login initiated');
                }, 2000);
            });
            
            // Enhanced forgot password functionality
            document.querySelector('.dripspaceNavbar-forgotPassword').addEventListener('click', function(e) {
                e.preventDefault();
                const email = emailInput.value.trim();
                
                if (!email || !validateEmail(email)) {
                    showError('Please enter a valid email address first.');
                    emailInput.focus();
                    return;
                }
                
                console.log('Forgot password requested for:', email);
                showError('Password reset instructions sent to your email.');
                
                setTimeout(() => {
                    hideError();
                }, 3000);
            });
            