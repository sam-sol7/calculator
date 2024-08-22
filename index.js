
let calcScreen = document.getElementById("calculator-screen");
let numButtons = document.getElementsByClassName("number-buttons");
console.log(numButtons);

function test() {
    var attribute = this.innerText;
    calcScreen.innerText = attribute;
    console.log(attribute)
};

for(let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", test);
}


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