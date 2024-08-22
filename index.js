let firstNum, secondNum, operator;
let calcScreen = document.getElementById("calculator-screen");
let numButtons = document.getElementsByClassName("number-buttons");
let operationButtons = document.getElementsByClassName("operation-buttons");
let resetButton = document.getElementById("reset-button");

console.log(numButtons);

function setNum() {
    let number = this.innerText;
    console.log(number)

    if (!operator){
        if (!firstNum) {
            number = parseInt(number);
            if(isNaN(number)) {
                firstNum = 0;
                calcScreen.innerText = 0;
            } else {
                firstNum = number;
                calcScreen.innerText = number;
            }
        } else {
            number = parseInt(`${firstNum}${number}`);
            if(isNaN(number)) {
                firstNum = 0;
                calcScreen.innerText = 0;
            } else {
                firstNum = number;
                calcScreen.innerText = number;
            }
        }
    
    } else {
        secondNum = parseInt(number);
        calcScreen.innerText = operate(firstNum, operator, secondNum);
        firstNum = parseInt(calcScreen.innerText);
        operator = null;
    }
};

for(let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", setNum);
}

function setOperator() {
    if (firstNum) {
        operator = this.innerText;
    }
};

for(let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", setOperator);
}

function resetCalculator() {
    firstNum = 0;
    operator = null;
    secondNum = 0;
    calcScreen.innerText = 0;
};

resetButton.addEventListener("click", resetCalculator);

function operate(firstNum, operator, secondNum) {
    switch(operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "×":
            return multiply(firstNum, secondNum);
        case "÷":
            return divide(firstNum, secondNum);
    }

};

function add(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
};