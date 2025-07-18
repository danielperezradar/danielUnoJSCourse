// IIFE that creates the calculator module
const calculator = (function () {
    // Function to add two numers
    function plus(firstNumber) {
        return function (secondNumber) {
            return firstNumber + secondNumber;
        };
    }

    // Function to substract firstNumber from secondNumber
    function minus(firstNumber) {
        return function (secondNumber) {
            return secondNumber - firstNumber;
        };
    }

    // Function to multiply two numers
    function times(firstNumber) {
        return function (secondNumber) {
            return firstNumber * secondNumber;
        };
    }

    // Function to divide secondNumber by firstNumber
    function divideBy(firstNumber) {
        return function (secondNumber) {
            return secondNumber / firstNumber;
        };
    }

    // Reveal the public API
    return {
        plus: plus,
        minus: minus,
        times: times,
        divideBy: divideBy
    };
})();

const add = calculator.plus(5);         // Stores 5 as the first number
console.log(add(3));                    // Outputs: 8 --> 5 + 3

const substract = calculator.minus(2);   // Stores 2 as the number to subtract
console.log(substract(10));             // Outputs: 8 --> 10 - 2

const multiply = calculator.times(4);    
console.log(multiply(6));               // Outputs: 24 --> 4 * 6

const divide = calculator.divideBy(2);      
console.log(divide(10));                // Outputs: 5 --> 10 / 2