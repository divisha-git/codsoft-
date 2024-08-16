const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (parseFloat(value) >= 0 || value === '.') {
            currentInput += value;
            display.value = currentInput;
            display.style.color = 'white'; 
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
            display.style.color = 'white'; 
        } else if (value === '=') {
            if (previousInput && currentInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator);
                display.value = currentInput;
                display.style.color = 'green'; 
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/', '^'].includes(value)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
                display.style.color = 'yellow'; 
            }
        } else if (value === 'sqrt') {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
            display.value = currentInput;
            display.style.color = 'blue';
        } else if (value === 'sin') {
            let rad=parseFloat(currentInput)*Math.PI/180.0;
            currentInput = Math.sin(rad).toString();
            display.value = currentInput;
            display.style.color = 'blue'; 
        } else if (value === 'cos') {
            let rad=parseFloat(currentInput)*Math.PI/180.0;
            currentInput = Math.cos(rad).toFixed(10).toString();
            display.value = currentInput;
            display.style.color = 'blue'; 
        } else if (value === 'tan') {
            let rad=parseFloat(currentInput)*Math.PI/180.0;
            currentInput = Math.tan(rad).toString();
            display.value = currentInput;
            display.style.color = 'blue'; 
        } else if (value === 'log') {
            currentInput = Math.log10(parseFloat(currentInput)).toString();
            display.value = currentInput;
            display.style.color = 'blue'; // Color for log
        } else if (value === 'exp') {
            currentInput = Math.exp(parseFloat(currentInput)).toString();
            display.value = currentInput;
            display.style.color = 'blue'; // Color for exp
        }
    });
});

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return (a / b).toString();
        case '^':
            return (Math.pow(a, b)).toString();
        default:
            return b;
    }
}
