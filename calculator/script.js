document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelectorAll('.key');
    const screen = document.getElementById('screen');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = key.value;

            if (key.classList.contains('operator')) {
                handleOperator(keyValue);
            } else if (key.classList.contains('function')) {
                handleFunction(keyValue);
            } else if (keyValue === '=') {
                calculate();
            } else {
                appendNumber(keyValue);
            }

            updateScreen();
        });
    });

    function handleOperator(nextOperator) {
        if (operator) {
            calculate();
        }

        previousInput = currentInput;
        currentInput = '';
        operator = nextOperator;
    }

    function handleFunction(func) {
        if (func === 'clear') {
            clearAll();
        } else if (func === 'sqrt') {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        } else if (func === 'square') {
            currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        } else if (func === 'power') {
            operator = '**';
            previousInput = currentInput;
            currentInput = '';
        }
    }

    function calculate() {
        let result;

        if (operator === '**') {
            result = Math.pow(parseFloat(previousInput), parseFloat(currentInput));
        } else {
            result = eval(previousInput + operator + currentInput);
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }

    function appendNumber(number) {
        if (currentInput === '' && number === '.') {
            currentInput = '0.';
        } else {
            currentInput += number;
        }
    }

    function clearAll() {
        currentInput = '';
        previousInput = '';
        operator = '';
    }

    function updateScreen() {
        screen.value = currentInput;
    }
});
