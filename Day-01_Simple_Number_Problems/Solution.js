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
