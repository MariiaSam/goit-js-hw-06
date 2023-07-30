let counterValue = 0;//зміна, яка буде вик-сь для збереження поточного значення лічильника

const valueCount = document.querySelector('#value');
const decrBtn = document.querySelector('[data-action="decrement"]');//кнопка містить атрибут data-action="decrement, при кліку на неї значення зменшується
const incrBtn = document.querySelector('[data-action="increment"]');//кнопка, значення - збільщується

const decrBtnClick = (evt) => {//ф-ція, при кліку на зменшення
  counterValue -= 1;
  valueCount.textContent = counterValue;
};

const incrBtnClick = (evt) => {//ф-ція, при кліку на збільшення значення
  counterValue += 1;
  valueCount.textContent = counterValue;
};

decrBtn.addEventListener('click', decrBtnClick);//слухачі події при відповідних діях -+
incrBtn.addEventListener('click', incrBtnClick);

