function grades(grades){

for (a in grades){
  if(grades[a] > 38 && (5-(grades[a]%5)) <3 ){
    //console.log(grades[a]+(5-(grades[a]%5)));
    grades[a]=grades[a]+(5-(grades[a]%5));
  }
}
//console.log(grades);
return grades;
}

grades([114,2,3,4,50]);
module.export = grades;
