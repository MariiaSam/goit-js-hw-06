function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} //генератор випадкового кольору 

const buttonChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.body;

const bodyChangeColor = (evt) => {// функція, яка викликається при кліку на кнопку зміни кольору.
  textColor.textContent =  body.style.backgroundColor = getRandomHexColor();
};

buttonChangeColor.addEventListener('click', bodyChangeColor);