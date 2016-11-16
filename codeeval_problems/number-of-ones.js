var number = 1; //any number 
var count = 0;

//figure out how far our exponent should go (i.e. 2^10, 2^9?? the highest should be less than or equal to the inputted number)
var exp = 0;
while(Math.pow(2,exp)<=number){
  exp++;
}
exp = exp-1;

//now that we have our max exponent, we can make a list of all the binary exponents (i.e. 2^0,2^1...up to 2^exp)
var bi = [];
for(i=exp;i>=0;i--){
  bi.push(Math.pow(2,i));
}

//go through all the values in the list and keep subtracting until 0. keep a counter to tally the 1's.
while(number>0){
  for(i=0;i<bi.length;i++){
    if(bi[i] <= number){
      number = number-bi[i];
      count++;
    }
  }
}

console.log(count)
//output should be 1 if number = 1
