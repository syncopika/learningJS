//return largest number of each of a set of arrays
function largestOfFour(arr) {
  var b = [];
  function maxArray(array){      //have to apply the Math.max function manually to arrays
    return Math.max.apply(null, array);
  }
  for(i=0;i<arr.length;i++){   //for each array within the array, get me the largest number and put it in a new array
    b.push(maxArray(arr[i]))
  }
  return b;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
