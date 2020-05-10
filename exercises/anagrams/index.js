// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
return clearner(stringA).toLowerCase().split("").sort().join('') === clearner(stringB).toLowerCase().split("").sort().join('');

}
function clearner(str){
  str = str.replace(/[^\w]/g,"");
  return str;
}
function makeChar(str){
  str = str.replace(/[^\w]/g,"");
  var char = str.split("").reduce((a, e)=>{a[e]=a[e] ? a[e]+1 : 1; return a },{});
  return char;
}
anagrams("chalo chalo rey!!!!!!!!!", "chalo !!!!!chalo rey!!!!");
module.exports = anagrams;
