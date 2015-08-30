//return lowest index of array where "num" should be relative to the elements in a given array

function where(arr, num) {
  for (i=0;i<arr.length;i++){
    if (num > arr[i] && num < arr[i+1]){  //if "num" is should be between two elements
      return (i+1);          //return the next highest index
    }
    else if (num == arr[i]) {
      return i;
    }
  }
  return num;
}

where([40, 60], 50);
