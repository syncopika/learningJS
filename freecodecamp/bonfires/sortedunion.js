//put all the unique numbers in one array

function unite(arr1, arr2, arr3) {
  for(i=0;i<arr2.length;i++){
    if(arr1.indexOf(arr2[i]) == -1){    //if element in arr2 is not in arr1
      arr1.push(arr2[i]);             //push that element to arr1
    }
  }
  for(i=0;i<arr3.length;i++){           //same deal here, just with arr3
    if(arr1.indexOf(arr3[i]) == -1){
      arr1.push(arr3[i]);
    }
  }
  return arr1;
}


unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
