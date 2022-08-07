import {Addition, Calculator, Division, Input, Multiplication, Subtraction} from 'rw_calculator_app';

const calculatorInput = document.querySelector('#calculator-input');
const functionsContainer = document.querySelector('#functions');
const digitContainer = document.querySelector('#digits');
const operatorContainer = document.querySelector('#operators');
const digits = '7894561230.'.split('');

function createButton(label, wrapper, action) {
    const newButton = document.createElement('button');
    newButton.className = 'digit';
    newButton.type = 'button';
    newButton.innerText = label;
    newButton.setAttribute('data-input', label);
    newButton.addEventListener('click', action);
    wrapper.appendChild(newButton);

    return newButton;
}

const calc = new Calculator();
let input = new Input('0');

digits.forEach(digit => {
    createButton(digit, digitContainer, event => {
        if (calc.isLastItemInput())
            return;
        const value = event.target.dataset.input;

        input = input.append(value);
        calculatorInput.value = `${calc.expression} ${input}`
    });
});

createButton('/', operatorContainer, () => {
    calc.addInput(input);
    calc.addOperation(new Division())

    input = new Input('0');
    calculatorInput.value = `${calc.expression} ${input}`
});

createButton('*', operatorContainer, () => {
    calc.addInput(input);
    calc.addOperation(new Multiplication())

    input = new Input('0');
    calculatorInput.value = `${calc.expression} ${input}`
});

createButton('-', operatorContainer, () => {
    calc.addInput(input);
    calc.addOperation(new Subtraction())

    input = new Input('0');
    calculatorInput.value = `${calc.expression} ${input}`
});

createButton('+', operatorContainer, () => {
    calc.addInput(input);
    calc.addOperation(new Addition())

    input = new Input('0');
    calculatorInput.value = `${calc.expression} ${input}`
});

createButton('=', digitContainer, () => {
    calc.addInput(input);
    const result = calc.evaluate();
    input = new Input(result.toString());
    calculatorInput.value = result;
});

createButton('AC', functionsContainer, () => {
    calculatorInput.value = '';
});

createButton('C', functionsContainer, () => {
    calculatorInput.value = calculatorInput.value.slice(0, -1);
});
