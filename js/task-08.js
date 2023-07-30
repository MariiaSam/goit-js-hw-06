const loginForm = document.querySelector('.login-form');

const handler = (evt) => {
  evt.preventDefault();
  const email = loginForm.email.value;;
  const password = loginForm.password.value;
  if (!email || !password) {
    alert('input fields must be fill');
    return;
  } else {
    console.log({ email: email, password: password });
  }
  evt.currentTarget.reset();
};

loginForm.addEventListener('submit', handler);
