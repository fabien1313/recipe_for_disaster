const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const registerFormHandler = async(event) => {
  event.preventDefault();

  const email = document.querySelector("#email-register").value.trim();
  const password = document.querySelector("#password-register").value.trim();

  if (email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    }); console.log(email, password);

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create account');
    }
  }
}

document
  .querySelector('#login-form')
  .addEventListener('click', loginFormHandler);

  document
  .querySelector('#register-form')
  .addEventListener('click', registerFormHandler);

  