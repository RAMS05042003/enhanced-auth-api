// frontend/app.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const message = document.getElementById('message');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
          message.textContent = 'Login successful';
        } else {
          message.textContent = data.error || 'Login failed';
        }
      } catch (error) {
        console.error('Login error:', error);
        message.textContent = 'Login failed';
      }
    });
  
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('register-username').value;
      const email = document.getElementById('register-email').value;
      const password = document.getElementById('register-password').value;
      try {
        const response = await fetch('/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        if (response.ok) {
          message.textContent = 'Registration successful';
        } else {
          message.textContent = data.error || 'Registration failed';
        }
      } catch (error) {
        console.error('Registration error:', error);
        message.textContent = 'Registration failed';
      }
    });
  });
  