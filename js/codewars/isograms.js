/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

function isIsogram(str) {
  const chars = [];
  for (let i = 0; i < str.length; i++) {
    const newChar = str[i].toLowerCase();
    if (chars.find(char => char === newChar)) {
      return false;
    }
    chars.push(newChar);
  }
  return true;
}


const action = isIsogram("moOse");
console.log(action);
