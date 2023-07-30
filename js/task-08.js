const loginForm = document.querySelector('.login-form');

const handler = (evt) => {//ф-ція, яка буде викликатися при спрацюванні поді submit
  evt.preventDefault();//не перезавант сторінка, коли спрацьовує подія submit
  const email = loginForm.email.value;;
  const password = loginForm.password.value;
  if (!email || !password) {
    alert('input fields must be fill');
    return;//якщо не ззаповнив пароль, то при зідправці зберігаються дані, які ввів, типу пошта
  } else {
    console.log({ email: email, password: password });
  }
  evt.currentTarget.reset();// очищає поля форми після відправки.
};

loginForm.addEventListener('submit', handler); 
