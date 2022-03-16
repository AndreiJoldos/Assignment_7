let operator = prompt('Please select an operator for the calculator ( + ; - ; * ; /) :');
const firstNumber = Number(prompt('Please enter the first number :'));
//console.log(typeof firstNumber)
const secondNumber = Number(prompt('Please enter the second number :'));

let result = null ;
switch (operator){
    case "*":
        result=firstNumber*secondNumber;
        break;
    case "-":
        result=firstNumber-secondNumber;
        break;
    case "+":
        result=firstNumber+secondNumber;
        break;
    case "/":
        result=firstNumber/secondNumber;
        break;

}
console.log(result)
prompt(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
