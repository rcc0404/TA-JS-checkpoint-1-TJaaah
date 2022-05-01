//1)
// In first one output will be a sum of those parameter.
// In second one output will whole function

//2)
function sum(first, second) {
  return first + second;
}

//undefined

function sum(first, second) {
  console.log(first + second);
}

//undefined

//3)
function sum(a, b, c) {
  return a + b + c;
}

sum(12, 24, 35);
//Output 71 because we define variable sum

//4)
// Yes, we can store

//5)
// function sayHello() {
//     let name = "Arya";
//     let message = "Hello" + " " + name;
//   return message;
// }

// sayHello();

//6

let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  return message;
}
showMessage();

//'Hello, John'

//7
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  return message;
}

alert(userName); // John

showMessage(); //'Hello, John'

alert(userName); // John

//8
//An anonymous function is a function without a name
alert = function ();
showMessage = function ();
alert = function ()
//9
No, function declaration can't be a anonymous function.

In f declaration we use name of variable.
but in anonymous we not use name vairable.

//10

    alert - alert the message
console.log(); - call the function
    let = define a vairable
    