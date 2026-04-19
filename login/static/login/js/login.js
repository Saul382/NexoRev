const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const formMessage = document.getElementById("formMessage");
const redirectToFormulario = window.__NEXOREV?.signupUrl || "/signup/";
const redirectToPrincipal = window.__NEXOREV?.homeUrl || "/formulario/";
const formStatusStorageKey = "nexorev_form_status";
const currentUserStorageKey = "nexorev_current_user";
const redirectDelayMs = 700;
let redirectTimer;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getFormStatusMap = () => {
  try {
    const rawValue = localStorage.getItem(formStatusStorageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : {};
    return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
  } catch {
    return {};
  }
};

togglePasswordBtn.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordBtn.textContent = isPassword ? "Ocultar" : "Ver";
  togglePasswordBtn.setAttribute(
    "aria-label",
    isPassword ? "Ocultar contraseña" : "Mostrar contraseña"
  );
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearTimeout(redirectTimer);
  formMessage.textContent = "";
  formMessage.className = "form-message";

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;

  if (!emailRegex.test(emailValue)) {
    formMessage.textContent = "Ingresa un correo electrónico válido.";
    formMessage.classList.add("error");
    emailInput.focus();
    return;
  }

  if (passwordValue.length < 8) {
    formMessage.textContent = "La contraseña debe tener al menos 8 caracteres.";
    formMessage.classList.add("error");
    passwordInput.focus();
    return;
  }

  const normalizedEmail = emailValue.toLowerCase();
  const formStatusMap = getFormStatusMap();
  const hasCompletedForm = Boolean(formStatusMap[normalizedEmail]);
  const targetPage = "/formulario/"; // Siempre al formulario por ahora

  sessionStorage.setItem(currentUserStorageKey, normalizedEmail);

  formMessage.textContent = "Datos validados. Redirigiendo al formulario...";
  formMessage.classList.add("success");

  redirectTimer = setTimeout(() => {
    window.location.href = targetPage;
  }, redirectDelayMs);
});
