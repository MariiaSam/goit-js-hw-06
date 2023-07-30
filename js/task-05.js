const nameInput = document.querySelector('#name-input');//знаходимо елементи 
const nameOutput = document.querySelector('#name-output');
const titleInput = document.querySelector('#titleInput')

function handler(evt) {//ств ф-цію, яка викликкатиметься при змінні значення в поле ввелення
  if (nameInput.value === '') {//evt - подія, тобто зміна значення  поля
    nameOutput.textContent = 'Anonymous';
    nameOutput.style.color = 'black';
  } else {
    nameOutput.textContent = evt.currentTarget.value;//evt.currentTarget - елемент на якому відбулася подія ; evt.currentTarget.value -ПОТОЧНЕ значення поля введення імені
    nameOutput.style.color = '#c322af';
    titleInput.style.color = "#c322af";
  }
}

nameInput.addEventListener('input', handler);//додаємо слухча події на input
