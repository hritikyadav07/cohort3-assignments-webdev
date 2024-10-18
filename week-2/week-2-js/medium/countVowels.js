/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.split("");
    vowel = "aeiouAEIOU".split("");
    count = 0
    for (let ch of str){
      if(vowel.indexOf(ch)!=-1){
        count +=1;
      }
    }
    return count;
}

module.exports = countVowels;