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



    // Login validation (frontend only)
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailValue = email.value.trim();
      const passValue = password.value.trim();

      if (emailValue === "user@example.com" && passValue === "123456") {
        errorMsg.style.display = 'none';
        form.reset();
        alert("✅ Login Successful!");
      } else {
        errorMsg.style.display = 'block';
      }
    });