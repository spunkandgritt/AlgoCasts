// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

a = 0;
while(n%10>0){
  a=(a*10)+(n%10)
  n = parseInt(n/10);
}
    return a;
}
reverseInt(153);

module.exports = reverseInt;
