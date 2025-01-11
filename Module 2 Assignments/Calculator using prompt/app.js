var num1 = +prompt("Enter Number 1");
var num2  = +prompt("Enter Number 2");
var operator  = prompt("Enter Operator to Perform" ,"+, -, *, /, %");

var result = 0
var resultstring = "";

if(operator == "+"){
    result = num1 + num2;
    resultstring = "Add"
} else if(operator == "-"){
    result = num1 - num2;
    resultstring = "Subtract"
} else if(operator == "*"){
    result = num1 * num2;
    resultstring = "Multiply"
} else if(operator == "/"){
    result = num1 / num2;
    resultstring = "Divide"
} else if(operator == "%"){
    result = num1 % num2;
    resultstring = "Modulus"
}

console.log("Number 1 => ",num1)
console.log("Number 2 => ",num2)
console.log("Given Operator => ",operator + " " + resultstring)
console.log("Result => " ,result)

