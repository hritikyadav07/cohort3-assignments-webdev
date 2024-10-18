/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  str = str.join("");
  let i = 0;
  let j = str.length - 1;
  // console.log(str);
  // console.log(rev);
  const isAlphabet = char => /[a-z]/.test(char);
  while(i<j) {
    if(!isAlphabet(str[i])){
      i++;
      continue;
    }
    if(!isAlphabet(str[j])){
      j--;
      continue;
    }
    if(str[i]!==str[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
