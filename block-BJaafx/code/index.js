//1)
let sum = 0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
    }
console.log(sum);

//2)
Error

//3)
function getEvenSum(max = 10) {
    let sum = 0
    for (let i = 0; i <= max; i++)
        if (i % 2 === 0) {
            sum += i;
        }
    return sum;
}
console.log(getEvenSum());

//4
function getOddSum(max = 10) {
    let sum = 0
    for (let i = 0; i <= max; i++)
        if (i % 2 !== 0) {
            sum += i;
        }
    return sum;
}
console.log(getOddSum());

//5 
function getProductOfDigits(num) {
    let final = 1;
    for (let i = 0; i < num.length; i++) {
        final *= num [i];
    }
    return final;
}
console.log(getProductOfDigits("333"));

//6
// function check(num) {
//   if (num > 5) {
//     return 'Bigger than 5';
//   }

//   if (num < 5) {
//     return 'Smaller than 5';
//   }

//   return num;
// }

// check(10); // output Bigger than 5
// check(1); // output Smaller than 5
// check(5); // output 5

//7

function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

getOutput('Arya'); // You are arya
getOutput('John'); // You are john
getOutput(); // Who are you

//8
function getOutput(name) {
  if (name === 'Arya') console.log('You are arya');
  if (name === 'John') console.log('You are john');
  return 'Who are you';
}

getOutput('Arya'); // Who are you
getOutput('John'); // Who are you
getOutput(); // Who are you

//9
We can have multiple return statement.

//10
In for loop we can given start value, stop value & how times add interation value.Error
In while we can initial value in first then in while we address stop value.
