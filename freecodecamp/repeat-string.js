//repeat a string as many times as "num"
function repeat(str, num) {
  var string = '';
  while(num>0){    //count backwards from num
    string += str;   //every increment => add str once
    num -= 1;        
  }
  return string;    //new string should have "str" x "num"
}

repeat('abc', 3);
