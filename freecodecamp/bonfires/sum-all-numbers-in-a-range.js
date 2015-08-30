//sum all numbers between the two given in an array

function sumAll(arr) {
  var total = 0;
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  for (i=min; i<=max; i++){
    total+=i;
  }
  return(total);
}

sumAll([1, 4]);
