// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//console.log("reversed string:");
return str.split("").reduce((reversed, character)=>{
  return character+reversed;
}, '');
}

function reverse2(str) {
//console.log("reversed string:");
const arr=str.split('').reverse().join("");
console.log(arr);
return arr;
}

function reverse3(str) {
//console.log("reversed string:");
arr="";
for(j=str.length;j--;j>-1){
arr += str[j];
}

console.log(arr);
return arr;
}
reverse2("sadsadsdd         ");
module.exports = reverse;
