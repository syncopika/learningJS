function diff(arr1, arr2) {
  var newArr = [];
  var list = {};
  for (i=0;i<arr1.length;i++){
    list[arr1[i]] = 0;          //put all numbers in array 1 into the list object, and set all values to 0
  }
  for (i=0;i<arr2.length;i++){        
    if (list[arr2[i]] !== undefined){       //compare list with all numbers in array 2
      list[arr2[i]] += 1;                   //if number in arr2 is in list, add 1 to the value of the number in list
    }
    else {
      list[arr2[i]] = 0;
    }
  }
  for (property in list){
    if (list[property] > 1 || list[property] == 0){   //after going through arr2, there should be some numbers in the list
      newArr.push(property);                          //with 0 as a value, and with 1 as a value (or all 1s or 0s too)
    }                                     //if a number is 0, that means it only shows up once between the two arrays
  }                                       //this is the number we want, so I push it to a new empty array
  
  //quick note: see above, when I pushed a "property" into an array? this will return the number value as a string,
  //thus, I added the loop below 
  
    for (i=0;i<newArr.length;i++){                //this is to turn a number string into just a number 
   if(parseInt(newArr[i]) == parseInt(newArr[i])){    //i.e. ("2" => 2)
     newArr[i] = parseInt(newArr[i]);
   }
    }

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
