const add = (a, b) => (a + b);
const sub = (a, b) => (a - b);
const mul = (a, b) => (a * b);
const div = (a, b) => (a / b);

const operate = (operator, a, b) => {
    let parsedA = parseFloat(a, 10);
    let parsedB = parseFloat(b, 10);
    let result = null;
    switch(operator) {
        case '+':
            result = add(parsedA, parsedB);
            break;
        case '-':
            result = sub(parsedA, parsedB);
            break;
        case '*':
            result = mul(parsedA, parsedB);
            break;
        case '/':
            result = div(parsedA, parsedB);
            break;
    }
    return result;
}

const parseExpression = (expr) => {
    if (expr.length === 0) return '';
    let c = expr.trim().split(' ');
    if (isNaN(c[0])) return '';
    if (c.length < 3 || c.length > 3) return parseFloat(c[0], 10);
    if (c[1] === '/' && c[2] === '0') return 'You are not supposed to do that ;)';
    return parseFloat(operate(c[1], c[0], c[2]), 10);
}

export default {
    add,
    sub,
    mul,
    div,
    operate,
    parseExpression
}