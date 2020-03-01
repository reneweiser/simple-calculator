function add(a, b) {
    return (parseFloat(a, 10) + parseFloat(b, 10)).toPrecision(5);
}

function subtract(a, b) {
    return (a - b).toPrecision(5);
}

function multiply(a, b) {
    return (a * b).toPrecision(5);
}

function divide(a, b) {
    return (a / b).toPrecision(5);
}

function operate(operator, a, b) {
    let result = null;
    switch(operator)
    {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
    }
    return result;
}

function putDigit(digit) {
    if (input.lhs === null)
        input.lhs = digit;
    else
        input.rhs = digit;
}

const calculatorInput = document.querySelector('#calculator-input');
const digitContainer = document.querySelector('#digits');
const operatorContainer = document.querySelector('#operators');
const keys = '7894561230'.split('');
const operators = '/*-+'.split('');
let input = {
    lhs: null,
    rhs: null,
    operator: null
};

keys.forEach(key => {
    let currentNode = document.createElement('button');
    currentNode.className = 'digit';
    currentNode.innerText = key;
    currentNode.addEventListener('click', () => calculatorInput.value = `${calculatorInput.value}${key}`);
    digitContainer.appendChild(currentNode);
});

operators.forEach(key => {
    let currentNode = document.createElement('button');
    currentNode.className = 'digit';
    currentNode.innerText = key;
    currentNode.addEventListener('click', () => {
        putDigit(calculatorInput.value);
        input.operator = key;
        calculatorInput.value = '';
    });
    operatorContainer.appendChild(currentNode);
});

let decimalButton = document.createElement('button');
decimalButton.className = 'digit';
decimalButton.innerText = '.';
decimalButton.addEventListener('click', () => calculatorInput.value = `${calculatorInput.value}.`);
digitContainer.appendChild(decimalButton);

let evaluateButton = document.createElement('button');
evaluateButton.className = 'digit';
evaluateButton.innerText = '=';
evaluateButton.addEventListener('click', () => {
    putDigit(calculatorInput.value);
    input.lhs = operate(input.operator, input.lhs, input.rhs);
    calculatorInput.value = input.lhs;
});
digitContainer.appendChild(evaluateButton);

let clearButton = document.createElement('button');
clearButton.className = 'digit';
clearButton.innerText = 'AC';
clearButton.addEventListener('click', () => {
    input = {
        lhs: null,
        rhs: null,
        operator: null
    };
    calculatorInput.value = '';
});
document.querySelector('#functions').appendChild(clearButton);
