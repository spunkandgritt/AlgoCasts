function miniMaxSum(arr){
console.log(arr);
minArr = arr.sort();
let j=4;
let min = 0;
let max = 0;
for(i=0;i<4;i++){
 console.log(max+minArr[j]);
 min = min+minArr[i];
 max = max+minArr[j];
 j--;
}
console.log(min+" "+max);
}

miniMaxSum([1,2,3,4,5]);
module.export=miniMaxSum;
