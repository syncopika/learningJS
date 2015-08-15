//Drop the elements of an array (first argument), starting from the front 
//until the predicate (second argument) returns true

function drop(arr, func) {
  var newArray = [];
  for(i=0;i<arr.length;i++){
    if(func(arr[i]) === true){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

drop([1, 2, 3], function(n) {return n < 3; });
