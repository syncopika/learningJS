//simplify a bunch of nested conditionals
var a = "(0 | (1 | 0)) & (1 & ((1 | 0) & 0))";

function solve(a){
  
  //base case
  if(a.indexOf("(") < 0){
    if(a.indexOf("|") > 0){
      var c = a.split("|");
      var left = parseInt(c[0].trim());
      var right = parseInt(c[1].trim());
      return (left || right);
    }else if(a.indexOf("&") > 0){
      var c = a.split("&");
      var left = parseInt(c[0].trim());
      var right = parseInt(c[1].trim());
      return (left && right);
    }else{
      return parseInt(a);
    }
  }
  
  var b = a.split("").reverse().join("");
  //this is index of nested-most left bracket (could use lastIndexOf)
  var lIndex = a.length - b.indexOf("(") - 1;
  var rIndex = a.substring(lIndex).indexOf(")") + lIndex;
  var substr = a.substring(lIndex+1, rIndex);

  var result;
  //evaluate substr
  if(substr.indexOf("|") > 0){
    var numbers = substr.split("|");
    var left = parseInt(numbers[0].trim());
    var right = parseInt(numbers[1].trim());
    result = left || right;

  }else if(substr.indexOf("&") > 0){
     var numbers = substr.split("&");
    var left = parseInt(numbers[0].trim());
    var right = parseInt(numbers[1].trim());
    result = left && right;

  }
  //give substr the brackets back
  substr = "(" + substr + ")"
  var c = a.substring(0, a.lastIndexOf(substr)) + a.substring(a.lastIndexOf(substr)).replace(substr, result);
  console.log(c)
  return solve(c);
}

console.log(solve(a))
