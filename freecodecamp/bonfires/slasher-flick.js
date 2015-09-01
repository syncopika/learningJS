//slasher flick (delete the first (howMany, i.e. 2, 3) indices in the array)

function slasher(arr, howMany) {  
  var diff = arr.length - howMany;   //let's get the diff between array length and howMany -> this tells us how many
  var newArr = [];                  // indices in the array to preserve (in this example, only one)
  if (howMany > 0){      //if howMany is 0, no deleting is necessary
  for(i=arr.length-1; i>arr.length-diff-1;i--){   //traverse the array backwards! (up to the index that equals diff)
    newArr.push(arr[i]);       //we want to save the array indices in the back because the front ones will be deleted
  }
  }
  else{
    return arr;
  }
  return newArr;   //our saved indices go here
}

slasher([1, 2, 3], 2);
//[3] should be the output
