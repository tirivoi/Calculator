const number1 = parseFloat(prompt("Enter first number: "));

const operator = prompt("Enter operator (either +, -, * or / ): ");

const number2 = parseFloat(prompt("Enter second number: "));

let result;

if( operator == "+") {
    result = number1 + number2;
} else if (operator == "-") {
    result = number1 - number2;
} else if (operator == "*") {
    result = number1 * number2;
} else {
    result = number1 / number2;
}
alert(result)