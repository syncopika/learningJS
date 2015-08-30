//this one was about primitive booleans.
//still confused about this one - got the answer with numerous attempts at switching operators XD

function boo(bool) {
  if(bool ===true){
    return true;
  }
  else{
  return (bool===false && bool!==true); //if boolean is false AND boolean is NOT true - boolean is false and false = false?
  }
  }

boo(null);
