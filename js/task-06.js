const input = document.querySelector('#validation-input');
input.addEventListener('blur', validation);

function validation(evt) {
  const inputData = Number(input.dataset.length);
  const inputValue = Number(input.value.length);

  if (inputValue === 0) {
    input.classList.remove('valid', 'invalid');
    return;
  } else if (inputData === inputValue) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
