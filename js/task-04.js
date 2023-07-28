let counterValue = 0;

const valueCount = document.querySelector('#value');
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

const decrBtnClick = (evt) => {
  counterValue -= 1;
  valueCount.textContent = counterValue;
};

const incrBtnClick = () => {
  counterValue += 1;
  valueCount.textContent = counterValue;
};

decrBtn.addEventListener('click', decrBtnClick);
incrBtn.addEventListener('click', incrBtnClick);

