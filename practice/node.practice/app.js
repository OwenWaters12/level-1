var readlineSync = require('readline-sync');
var num1 = readlineSync.question("Enter your first number: ");
var num2 = readlineSync.question("Enter your second number: ");
var operation = readlineSync.question("enter operation: ");


function add(){
var add = parseInt(num1, 10);
var add2 = parseInt(num2, 10);
console.log(add + add2)
};

function subtract(){
    var minus = parseInt(num1, 10);
    var minus2 = parseInt(num2, 10);
    console.log(minus - minus2)
};

function multiply(){
    var times = parseInt(num1, 10);
    var times2 = parseInt(num2, 10);
    console.log(times * times2)
};

function divide(){
    var cut = parseInt(num1, 10);
    var cut2 = parseInt(num2, 10);
    console.log(cut / cut2)
};

if (operation === "+"){
    add()
}if (operation === "-"){
    subtract()
}if(operation === "x", "*"){
    multiply()
}if(operation === "/"){
    divide()
 }
//  ;if (operation !== "+", "-","x","/","*"){
//     console.log("Enter operation: ")
// };

