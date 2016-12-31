function parse(string){
  var str = "";
  var set = new Set();
  
  set.add('{');
  set.add('[');
  set.add('(');
  set.add('}');
  set.add(']');
  set.add(')');
  
  for(var i = 0; i < string.length; i++){
      if(set.has(string[i])){
          str += string[i];
      }
  }
  return str;
}

function brackets(expression){
    
    var pairs = {"[": "]", "(": ")", "{":"}"};
    var string = parse(expression).split("");
    var length = string.length - 1;
    
    //if the number of brackets is not even, we already know there
    //can't be a closing bracket
    if(string.length % 2 !== 0){
        return false;
    }
    
    for(var i = 0; i < length; i++){
        //find closing bracket
        if(string[i] === pairs[string[i-1]] && i > 0){
            //edit the string array
            string.splice(i-1,2);
            //start over
            i = 0;
            length = string.length - 1;
        }
        if(string[i+1] === pairs[string[i]] && i === 0){
            string.splice(0,2);
        }
    }
    if(string.length === 0){
        return true;
    }
    return false;
}
