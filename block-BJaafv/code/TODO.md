1. What is the difference between the two `sum` function given below?

```js
// first
function sum(a, b, c) {
  return a + b + c;
}

// second
function sum(a, b) {
  console.log(a + b);
}
```

First sum will be print a function variable i.e a+b
second sum will be print whole function which console log

2. If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.

first is sum of a+b
second is concate of a+b

3. What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?

71 In function variable is sum

4. Can you store the first `sum` function in a variable named `add`. If yes why? If no why?

yes, we can store

5. Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.

```js
function sayHello() {
  let name = Arya;
  return `Hello ${name};
}
```

6. What will be the output of the function below and why?

```js
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  return message;
}

showMessage();
```

//'Hello, John'

7. What will be the output for `Output1` `Output2` and `Output3` in the code below.

```js
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  return message;
}

alert(userName); // John

showMessage(); //'Hello, John'

alert(userName); // John
```

8. What is a Anonymous Function give example of three functions.

9. Can function declaration be a Anonymous Function? Explain

F declaration always start with funcation keyword &
In Anonymous function not there

10. Give 5 example of good naming convention for defining a function. You can read the details below to do that.

```md
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
```
