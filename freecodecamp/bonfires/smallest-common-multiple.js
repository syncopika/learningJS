//find smalles common multiple among numbers in an array

function smallestCommons(arr) {
var newArr = [];
var max = Math.max(arr[1],arr[0]);
var min = Math.min(arr[1],arr[0]);
  
for(i=min;i<=max; i++){
  newArr.push(i);
}
  
function gcd(a,b){      //this formula calculates greatest common denominator between two numbers
  while (b!==0){
    var hold = b;
    b = a%b;
    a = hold;
  }
  return a;
}
  
return newArr.reduce(function(a,b){   //keep applying the formula to a pair of numbers in the array
  return (a*b)/gcd(a,b);              //eventually, each pair will reduce to one number! 
});
}

smallestCommons([1,5]);
