const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function fontSizeControl (evt) {
    text.style.fontSize = evt.currentTarget.value + "px";
};

input.addEventListener('input', fontSizeControl);
