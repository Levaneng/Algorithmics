/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
 */

function validParentheses(parens){
  let value = 0;
  for (let i = 0; i < parens.split("").length; i++) {
    value = (parens[i] === "(") ? value + 1 : value -1;
    if(value < 0) {
      return false;
    }
  }
  return value === 0;
}

// const input = ")()()()("; // false
// console.log(validParentheses(input));


const input2 = "()"; // true
console.log(validParentheses(input2));
