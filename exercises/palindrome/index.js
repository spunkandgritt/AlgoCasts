// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome (str){
//Permuations of palindrome problem.
// Basically we cut the palindrome in 2 halfs ... hashmap every character, check if any of them are odd.

arr = str.split("");
console.log(arr);
var result = arr.reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
counter = 0;
for(let a in result){
  if(result[a]%2 === 0){
    //do nothing
  }else{
    counter++;
  }
}
if(counter<2){console.log("permutation palindrome is true")}else {
  console.log("permutation palindrome is not true")
}
return counter<2;
}
palindrome("ivicc");

function palindrome1(str){
 return str=== str.split("").reduce((reversed, character)=>{
   return character+reversed;
 },"")

}


function palindrome2(str) {

if (str === str.split("").reduce((reversed, character)=>{
  return character+reversed;
}, '')) {

return true;

}else {
  return false
}

}


module.exports = palindrome;
