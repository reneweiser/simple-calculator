import Operations from './Operations.js';

const calculatorInput = document.querySelector('#calculator-input');
const functionsContainer = document.querySelector('#functions');
const digitContainer = document.querySelector('#digits');
const operatorContainer = document.querySelector('#operators');
const digits = '7894561230'.split('');
let showingResult = false;

function makebutton (label, wrapper, action) {
    let newButton = document.createElement('button');
    newButton.className = 'digit';
    newButton.innerText = label;
    newButton.addEventListener('click', action);
    wrapper.appendChild(newButton);
    return newButton;
};

digits.forEach(digit => {
    makebutton(digit, digitContainer, () => {
        if (showingResult) {
            calculatorInput.value = '';
            showingResult = false;
        }
        calculatorInput.value = `${calculatorInput.value}${digit}`;
    });
});

makebutton('/', operatorContainer, () => {
    calculatorInput.value = Operations.parseExpression(calculatorInput.value);
    calculatorInput.value = `${calculatorInput.value} / `;
    decimalButton.disabled = false;
    showingResult = false;
});

makebutton('*', operatorContainer, () => {
    calculatorInput.value = Operations.parseExpression(calculatorInput.value);
    calculatorInput.value = `${calculatorInput.value} * `;
    decimalButton.disabled = false;
    showingResult = false;
});

makebutton('-', operatorContainer, () => {
    calculatorInput.value = Operations.parseExpression(calculatorInput.value);
    calculatorInput.value = `${calculatorInput.value} - `;
    decimalButton.disabled = false;
    showingResult = false;
});

makebutton('+', operatorContainer, () => {
    calculatorInput.value = Operations.parseExpression(calculatorInput.value);
    calculatorInput.value = `${calculatorInput.value} + `;
    decimalButton.disabled = false;
    showingResult = false;
});

const decimalButton = makebutton('.', digitContainer, (e) => {
    calculatorInput.value = `${calculatorInput.value}.`;
    e.target.disabled = true;
});

makebutton('=', digitContainer, () => {
    calculatorInput.value = Operations.parseExpression(calculatorInput.value);
    decimalButton.disabled = false;
    showingResult = true;
});

makebutton('AC', functionsContainer, () => {
    calculatorInput.value = '';
});

makebutton('C', functionsContainer, () => {
    calculatorInput.value = calculatorInput.value.slice(0, -1);
});
