/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
 */

// function permutations(string) {
//   //if (string.length < 2) return string; // This is our break condition

//   let permutationsArray = []; // This array will hold our permutations

//   for (let i = 0; i < string.length; i++) {
//     var char = string[i];

//     // Cause we don't want any duplicates:
//     if (string.indexOf(char) !== i) // if char was used already
//       continue; 

//     var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

//     for (var subPermutation of permutations(remainingString)) {
//       permutationsArray.push(char + subPermutation)
//     }
//   }
//   return permutationsArray;
// }

// const jaja = permutations("aabb");

// console.log();

function permutations(string) {
  const chars = [];
  const permute = (array, size) => {
    if (size <= 1) {
      chars.push(array.slice());
    }
    else {
      for (let i = 0; i < size; i++) {
        permute(array, size - 1);
        const j = size % 2 ? 0 : i;
        [array[size - 1], array[j]] = [array[j], array[size - 1]];
      }
    }
  }
  permute(string.split(""), string.length); 
  const strings = chars.map(perm => perm.join(''));
  return strings.filter((value, index, self) => self.indexOf(value) === index);
}


const pp = permutations("aabb");
console.log(pp);