
//inputs
let firstInput = null;
let operator = null;
let secondInput = null;
//operation
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
//all query selectors
let screenDefauult = `calc is short for calculator chat! I'm just using a slang`;
let ifZero = `i'm not falling for that lmao `;
let InputScreen = document.querySelector('.userVisual')
let clearThis = document.querySelector('#deleteOneDigit');
let result = document.querySelector('.equalTo');
let screen = InputScreen.textContent;
let mathSigns = document.querySelectorAll(".operator")
let OppSign = document.querySelector(".changeSign");
//changing current input into percentage
document.querySelector(".percentage").addEventListener('click', () => {
    InputScreen.textContent = (InputScreen.textContent) / 100;
})
//adding decimal point to current input
document.querySelector(".decimal").addEventListener('click', () => {
    InputScreen.textContent = InputScreen.textContent + '.';
})
function changeSign() {
    if (InputScreen.textContent.startsWith('-')) {
        InputScreen.textContent = InputScreen.textContent.slice(1);
    } else {
        InputScreen.textContent = '-' + InputScreen.textContent
    }
};

//entering input
let input = document.querySelectorAll(".numbers").forEach(number => {
    number.addEventListener('click', (event) => {
        InputScreen.textContent += event.target.textContent;
        if (operator === null) {
            firstInput = parseFloat(InputScreen.textContent);
        } else {
            secondInput = parseFloat(InputScreen.textContent);
        }
    });
});

mathSigns.forEach(operation => {
    operation.addEventListener('click', (event) => {
        if (firstInput !== null) {
            operator = event.target.textContent;
            InputScreen.textContent = '';
        }
    });
});

function calculation(operator, a, b) {
    let answer;
    switch (operator) {
        case '+':
            answer = add(a, b);
            break;
        case '-':
            answer = subtract(a, b);
            break;
        case '*':
            answer = multiply(a, b);
            break;
        case '/':
            if (b === 0 || isNaN(a) || isNaN(b)) { 
                answer = ifZero;
             }
            else {
                answer = divide(a, b);
            }
            break;
        default: answer = 'invalid';
    }
    return answer;

}

result.addEventListener("click", (e) => {
    if (firstInput !== null && secondInput !== null && operator !== null) {
        let solution = calculation(operator, firstInput, secondInput);
        InputScreen.textContent = solution;
        firstInput = solution;
        secondInput = null;
        operator = null;
    } else {
        InputScreen.textContent = '404:☹';
        setTimeout(() => {
            InputScreen.textContent = '';
        }, 2000);
    }

});
// reseting all values.
let deleteAll = document.querySelector('.clearAll').addEventListener('click', () => {
    InputScreen.textContent = '';
    firstInput = null;
    secondInput = null;
    operator = null;
})
//deleting single digit.
clearThis.addEventListener('click', () => {
    InputScreen.textContent = InputScreen.textContent.slice(0, -1);
});