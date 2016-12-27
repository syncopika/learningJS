//convert integer to binary
function binary(number){
  var str = "";
  while(number !== 0){
    //the remainder is the 0 and 1's in binary
    var rem = number % 2;
    str += rem;
    number = Math.floor(number/2);
  }
  //reverse str
  var newStr = "";
  for(var i = str.length-1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

console.log(binary(6)) //110
