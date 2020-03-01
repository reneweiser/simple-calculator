function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator)
    {
        case '+':
            console.log(add(a,b));
            break;
        case '-':
            console.log(subtract(a,b));
            break;
        case '*':
            console.log(multiply(a,b));
            break;
        case '/':
            console.log(divide(a,b));
            break;
    }
}

const calculatorInput = document.querySelector('#calculator-input');
const keyContainer = document.querySelector('#keys');
const keys = '789/456*123-0.=+'.split('');

keys.forEach(key => {
    let currentNode = document.createElement('button');
    currentNode.className = 'digit';
    currentNode.innerText = key;
    keyContainer.appendChild(currentNode);
});
