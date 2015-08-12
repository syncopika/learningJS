//find the missing letter in the range given
//i.e. "d" should be returned in this example

function fearNotLetter(str) {
  var arr = [];
  var arr2 = [];
  for(i=0;i<str.length;i++){
    arr.push(str.charCodeAt(i));    //give the numeric code for each letter in string
  }
  for (i=arr[0];i<=arr[arr.length-1];i++){
    arr2.push(i);                   //for this array, give the sequence from the smallest number (which is first)
  }                                 //to the largest number (which is last), which will give us the numeric code
  var table = {};                   //for the missing letter
  for(i=0;i<arr2.length;i++){
    table[arr2[i]] = 0;               //just like in previous exercises, we'll compare the two arrays
  }                                 //by using a table to record how many times a number shows up
    for(property in table){
      for(i=0;i<arr.length;i++){
        if(arr[i] == property){
          table[property] += 1;
        }
      }
    }
  for(property in table){
  if(table[property]===0){                    //there should be one number that should only show up once and thus have a value of 0
    return String.fromCharCode(property);     //convert that number to its corresponding letter
  }
  }
}

fearNotLetter('abce');
