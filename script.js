document.getElementById('registration-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });
  
  const result = await response.json();
  if (result.status === 'ok') {
    // Redirect or show success message
  } else {
    // Show error message
  }
});
