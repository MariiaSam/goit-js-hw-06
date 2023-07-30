const input = document.querySelector('#validation-input');
input.addEventListener('blur', validation);//додажмо на текстове поле сліухача події blur, яка виникає коли юзер перестає взаєм з інпутом, тобто елемент втрачає фокус.
//validation функція, яка викл при спрацюванні події blur.

function validation(evt) {
input.addEventListener('blur', validation);//
const inputData = Number(input.dataset.length);//отриуємо результат значення макс допустимого введеного 
//  тексту тексту 
  const inputValue = Number(input.value.length);//перетворюються в числа Number

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
