const input = document.querySelector('#font-size-control');//знаходимо елементи на по ідентифікатору
const text = document.querySelector('#text');

function fontSizeControl (evt) {//ств ф-цію,яка буде викликатись при зміні значення
    text.style.fontSize = evt.currentTarget.value + "px";
};//evt - подія, т.б. зміна значення

input.addEventListener('input', fontSizeControl);// додаємо слухча події на input
