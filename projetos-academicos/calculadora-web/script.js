let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
}

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (firstOperand === '') {
        firstOperand = currentInput;
        currentInput = '';
        operator = op;
    } else if (currentInput !== '') {
        firstOperand = calculate(firstOperand, currentInput, operator);
        display.value = firstOperand;
        currentInput = '';
        operator = op;
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function calculateResult() {
    if (firstOperand !== '' && currentInput !== '') {
        firstOperand = calculate(firstOperand, currentInput, operator);
        display.value = firstOperand;
        currentInput = '';
        operator = '';
    }
}

function calculate(first, second, op) {
    first = parseFloat(first);
    second = parseFloat(second);

    if (op === '+') {
        return first + second;
    } else if (op === '-') {
        return first - second;
    } else if (op === '*') {
        return first * second;
    } else if (op === '/') {
        return second !== 0 ? first / second : 'Erro';
    }
    return second;
}