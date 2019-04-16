/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
function validBraces(parens) {
  const stack = [];

  const braces = {
    "(": { isOpen: true },
    "[": { isOpen: true },
    "{": { isOpen: true },
    ")": { match: "(" },
    "]": { match: "[" },
    "}": { match: "{" },
  };

  for (let i = 0; i < parens.split("").length; i++) {
    const braket = braces[parens[i]];
    if (braket.isOpen === true) {
      stack.push(parens[i]);
    }
    else if (stack.pop() !== braket.match) {
      return false;
    }
  }

  return stack.length === 0;
}

const input = "[()]";
console.log(validBraces(input));



  // const braces = [
  //   { open: "(", close: ")", value: 0 },
  //   { open: "{", close: "}", value: 0 },
  //   { open: "[", close: "]", value: 0 }
  // ]

  // for (let i = 0; i < parens.split("").length; i++) {
  //   for (let j = 0; j < braces.length; j++) {
  //     if (parens[i] === braces[j].open) {
  //       braces[j].value++;
  //     }
  //     else if (parens[i] === braces[j].close) {
  //       braces[j].value--;
  //     }
  //     if (braces[j].value < 0) {
  //       return false;
  //     }
  //   }
  // }

  // return braces.filter(b => b.value !== 0).length === 0;