function addNum(num1,num2) {
    let result = num1 + num2;
    return result;
}


function subtractNum(num1,num2) {
    let result = num1 - num2;
    return result;
}

function multiplyNum(num1, num2) {
    let result = num1 * num2;
    return result;
}


function divideNum(num1,num2) {
    let result = num1 / num2;
    return result;
}

let firstNumber;
let secondNumber;
let operator;
function operate(num1,num2,operator) {
    if(operator === "+") {
        return addNum(num1,num2);
    } else if(operator === "-") {
        return subtractNum(num1,num2);
    } else if(operator === "/") {
        return divideNum(num1,num2);
    } else if(operator === "*") {
        return multiplyNum(num1,num2);
    }
}

console.log(operate(10,5,"-"));



