// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
const chunked =[];
var last = [];
//const last =[];
for(let a of array)
{
  debugger;
  last = chunked[chunked.length - 1];
  if(!last||last.length === size){
debugger;
    chunked.push([a]);
    //last.push(a); //pushing a new array into array of arrays chunked.
  } else{
    debugger;
    last.push(a);
    console.log(last+"tihs is last");
  }
}

console.log(chunked);
return chunked;

}

chunk([1,2,3,4,5,6,7,8,9,0,1,2,3,4], 2);
module.exports = chunk;
