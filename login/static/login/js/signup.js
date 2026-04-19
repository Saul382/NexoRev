const signupForm = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');
const toggleButtons = document.querySelectorAll('.ghost-btn[data-target]');
const loginUrl = window.__NEXOREV?.loginUrl || '/login/';

function setMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = 'form-message ' + type;
}

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const input = document.getElementById(targetId);
    const visible = input.type === 'text';
    input.type = visible ? 'password' : 'text';
    button.textContent = visible ? 'Ver' : 'Ocultar';
  });
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const acceptTerms = document.getElementById('acceptTerms').checked;

  if (!fullName || !email || !password || !confirmPassword) {
    setMessage('Completa todos los campos para crear la cuenta.', 'error');
    return;
  }

  if (password.length < 8) {
    setMessage('La contraseña debe tener al menos 8 caracteres.', 'error');
    return;
  }

  if (password !== confirmPassword) {
    setMessage('La confirmación de contraseña no coincide.', 'error');
    return;
  }

  if (!acceptTerms) {
    setMessage('Debes aceptar los términos y condiciones.', 'error');
    return;
  }

  setMessage('Cuenta creada con exito. Redirigiendo al login...', 'success');
  setTimeout(() => {
    window.location.href = loginUrl;
  }, 1400);
});
