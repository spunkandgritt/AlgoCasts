function compareTriplets(a, b) {
var m =0;
var bob =0;
var i=0;

for(let x in a){
  if(a[x] > b[x]){
    m++;
  }else if (a[x]<b[x]) {
    bob++;
  }
}

//console.log(m+" "+bob);
return [m, bob];

}

compareTriplets([2, 5, 3],[1,2,4]);
module.exports = compareTriplets;
