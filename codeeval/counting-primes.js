var a = '20, 30'; 
var b = a.split(',').map(function(a){return parseInt(a)});

var primes = [];
for(i=b[0];i<=b[1];i++){
  var isNumPrime = true;
  for(j=i-1; j>=2; j--){
    if(i%j == 0){
      isNumPrime = false;
    }
  }
  if(isNumPrime){
    primes.push(i);
  }
}
console.log(primes.length)
