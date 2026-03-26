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
if (Number.isInteger(num1) && number > 0) {
  for (let i = 1; i <= number; i++) {
    console.log(number - i + 1);
  }
} else {
  console.log("ERROR");
}
