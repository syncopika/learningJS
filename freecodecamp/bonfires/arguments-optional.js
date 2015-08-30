//add whatever numerical arguments are present (i.e., 2 numbers, 3 numbers, etc.)

function add() {
  var b = arguments[0];
  for(i=0;i<arguments.length;i++){
    if(typeof arguments[i] !== 'number'){
    return undefined;
    }
    
    else{
  if (arguments.length === 1){
    return function(a){if(typeof a === 'number') return (b + a);};
  }
      else if(typeof arguments[0] !== typeof arguments[1]){
        return undefined;
      }
  else{
  return arguments[0] + arguments[1];
}
    }
}
}


add(2,3);
