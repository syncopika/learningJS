//helper function to determine primality
function isPrime(number){
  if(number == 2){
    return true;
  }
  for(i = 2; i < number; i++){
    if(number%i == 0){
      return false;
    }
  }
  return true;
}

var arr = []; //hold the factors here

//finding the prime factors with recursion
function primFac(number){
  if(isPrime(number)){
    arr.push(number);
    return number;
  }
  for(j = 2; j <= number; j++){
  	if(number % j == 0){
      arr.push(j);
    	return primFac(number/j);
    }
  }
}

console.log(primFac(8))
console.log(arr)  
