const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function handler (evt) {
    if (nameInput.value === '') {
        nameOutput.textContent = 'Anonymous';
        } else {
        nameOutput.textContent = evt.currentTarget.value;
        };
    };

nameInput.addEventListener('input', handler);

