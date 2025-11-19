    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');
    const togglePass = document.getElementById('togglePass');

    // Show/Hide password
    togglePass.addEventListener('click', () => {
      if (password.type === 'password') {
        password.type = 'text';
        togglePass.textContent = '🙈';
      } else {
        password.type = 'password';
        togglePass.textContent = '👁️';
      }
    });