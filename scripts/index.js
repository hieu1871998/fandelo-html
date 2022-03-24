const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');

const validateEmail = () => {
  const invalidEmailNoti = document.getElementById('invalidEmailNoti');
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = emailInput.value;

  if (email) {
    if (!email.match(emailPattern)) {
      invalidEmailNoti.classList.remove('hidden');
    } else {
      invalidEmailNoti.classList.add('hidden');
    }
    return;
  }
  invalidEmailNoti.classList.add('hidden');
}

const validatePassword = () => {
  const invalidPasswordNoti = document.getElementById('invalidPasswordNoti');
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const password = passwordInput.value;

  if (password) {
    if (!password.match(passwordPattern) || password.length < 8) {
      invalidPasswordNoti.classList.remove('hidden');
    } else {
      invalidPasswordNoti.classList.add('hidden');
    }
  }
}

const confirmPassword = () => {
  const invalidConfirmPasswordNoti = document.getElementById('invalidConfirmPasswordNoti');
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  console.log('confirming')

  if (confirmPassword) {
    if (confirmPassword != password) {
      invalidConfirmPasswordNoti.classList.remove('hidden');
    } else {
      invalidConfirmPasswordNoti.classList.add('hidden');
    }
  }
}

emailInput.onkeyup = validateEmail
passwordInput.onkeyup = validatePassword;
confirmPasswordInput.onkeyup = confirmPassword;

