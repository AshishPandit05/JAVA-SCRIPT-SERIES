// 1. Print Numbers from 1 to N
/* 
+prompt() = shortcut for Number(prompt()) and Converts input from string -> number
check input ? ---> Number.isInteger(number) && number > 0 
*/

let num = +prompt("Enter a number :");
if (Number.isInteger(num) && num > 0) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
} else {
  console.log("ERROR");
}

// 2. Print Numbers from N to 1 without changing the loop condition of above question
/* 

*/
let number = +prompt("Enter a number :");
if (Number.isInteger(number) && number > 0) {
  for (let i = 1; i <= number; i++) {
    console.log(number - i + 1);
  }
} else {
  console.log("ERROR");
}

// 3. Print All Even Numbers from 1 to N
let num2 = +prompt("Enter the number : ");
for (let i = 2; i < num2; i += 2) {
  console.log(i);
}

// 4. Sum of First N Natural Numbers
let num3 = +prompt("Enter the number : ");
let sum = 0;
for (let i = 0; i <= num3; i++) {
  sum += i;
}
console.log(sum);

// Optimized
// sum = (x(x + 1))/2

const x = Number(prompt("Enter the number:"));

if (x >= 0) {
  const sum = (x * (x + 1)) / 2;
  console.log(sum);
} else {
  console.log("ERROR");
}

// 5. Product (Factorial) of N
let num4 = +prompt("Enter the number : ");
let fact = 1;
for (let i = 1; i <= num4; i++) {
  fact *= i;
}
console.log(fact);

// 6. Sum of All Even Numbers up to N
let num5 = +prompt("Enter the number : ");
let even = 0;
for (let i = 0; i <= num5; i += 2) {
  even += i;
}
console.log(sum);

/*  Optimized code */
let num6 = Number(prompt("Enter the number : "));
if (Number.isInteger(num6) && num6 > 0) {
  const evenNum = Math.floor(num6 / 2);
  const sumOfEven = evenNum * (evenNum + 1);
  console.log(sumOfEven);
} else {
  console.log("Invalid input");
}
