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
