
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
let x = arr.length;
let pd=0;
let nd=0;
for(let i in arr){
  pd=pd+arr[i][i];
  nd=nd+arr[i][x-1];
  x--;
}
console.log(Math.abs(pd-nd));
return Math.abs(pd-nd);
}

diagonalDifference([[1,2,3,1],[4,1,1,,7],[1,1,1,1],[10,1,1,1]])


module.exports = diagonalDifference;
