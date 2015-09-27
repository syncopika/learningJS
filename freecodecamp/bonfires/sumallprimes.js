function sumPrimes(num) {
  var newArr = [];
  for(i=2;i<=num;i++){
    var prime = true;
    for(j=2;j<i;j++){
      if(i%j === 0 && i!==j){
        prime = false;
      }
    }
    if(prime === true){
    newArr.push(i);
    }
  }
  return newArr.reduce(function(a,b){return a+b;});
}
sumPrimes(10);

//5:07 pm 092915
//good evening...here's a solution for getting the total of the first 1000 prime numbers (note that it's the first
//1000 prime numbers, not the prime numbers up to 1000!) I'm doing this for one of the codeeval exercises.
//BUT this solution is really slow. just wanted to let you know. 

var arr = [2];
for(i=3;arr.length<1000;i++){ //remember that the second bit, i.e. 'arr.length<1000' sets the condition for which to continue the loop!
  var prime = true;
  for(j=2;j<i;j++){
   if(i%j === 0 && i!==j){
     prime = false;
   }
 }
  if(prime === true){
    arr.push(i);
  }
}
arr = arr.reduce(function(a,b){return a + b});
console.log(arr)
