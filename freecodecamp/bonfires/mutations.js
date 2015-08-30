//mutations (tell me if all the characters in the 2nd index in arr are in the 1st index)

  function mutation(arr) {
  var str1 = arr[0].toLowerCase().split(''); //get index 1/2 of the array separated into a new array so we can evaluate 
  var str2 = arr[1].toLowerCase().split(''); // each character individually
  var table = {true:0, false:0};          //I use a table to compare the two new arrays - each true equals one match in shared character
  for (i=0; i<str2.length; i++){       
    if (str1.indexOf(str2[i]) === undefined){
      table["false"]+=1;
    }
    if (str1.indexOf(str2[i]) < 0){    
      table["false"]+=1;
    }
    else{
      table["true"]+=1;
    }
  }
  if (table.true === str2.length){
    return true;}
  else{
    return false;
   }
  }
mutation(['hello', 'hey']);
