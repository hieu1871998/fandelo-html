const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const signupButton = document.getElementById('signupButton');
const signupPopup = document.getElementById('signupPopup');
const signupPopupButton = document.getElementById('signupPopupButton');
const newPasswordInput = document.getElementById('newPasswordInput');
const confirmNewPasswordInput = document.getElementById('confirmNewPasswordInput');
const resetButton = document.getElementById('resetButton');
const resetPopup = document.getElementById('resetPopup');
const resetPopupButton = document.getElementById('resetPopupButton');

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
    return;
  }
  invalidPasswordNoti.classList.add('hidden');
}

const confirmPassword = () => {
  const invalidConfirmPasswordNoti = document.getElementById('invalidConfirmPasswordNoti');
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (confirmPassword) {
    if (confirmPassword != password) {
      invalidConfirmPasswordNoti.classList.remove('hidden');
    } else {
      invalidConfirmPasswordNoti.classList.add('hidden');
    }
  }
}

const signupSubmit = () => {
  signupPopup.classList.remove('hidden');
}

const resetSubmit = () => {
  resetPopup.classList.remove('hidden');
}

const gotoVendor = () => {
  if (signupPopup) signupPopup.classList.add('hidden');
  if (resetPopup) resetPopup.classList.add('hidden');
}

if (emailInput) emailInput.onkeyup = validateEmail;
if (passwordInput) passwordInput.onkeyup = validatePassword;
if (confirmPasswordInput) confirmPasswordInput.onkeyup = confirmPassword;
if (signupButton) signupButton.onclick = signupSubmit;
if (signupPopupButton) signupPopupButton.onclick = gotoVendor;
if (passwordInput) newPasswordInput.onkeyup = validatePassword;
if (confirmPasswordInput) confirmNewPasswordInput.onkeyup = confirmPassword;
if (resetButton) resetButton.onclick = resetSubmit;
if (resetPopupButton) resetPopupButton.onclick = gotoVendor;