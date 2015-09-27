//for more info, go to the freecodecamp -> bonfires -> sumallprimes.js

var total = 2;
var counter = 1;
for(i=3;counter<1000;i=i+2){
  var prime = true;
  for(j=2;j<i;j++){
   if(i%j === 0 && i!==j){
     prime = false;
   }
 }
  if(prime === true){
    total+=i;
    counter++;
  }
}
console.log(total)
