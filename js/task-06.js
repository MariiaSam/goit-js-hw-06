const input = document.querySelector('#validation-input');
input.addEventListener('blur', blurBorder);

function blurBorder (evt) {
    const inputData = Number(input.dataset.length);
    const inputValue = Number(input.value.trim().length);

    if (inputData === inputValue) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
};
