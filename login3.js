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
            