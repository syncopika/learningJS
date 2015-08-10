//confirm the ending
function end(str, target) {
  str2 = str.split(' ');    //make an array with each character in the str (forgot why?)
  if (str2[str2.length-1] === target || str[str.length-1] === target){ //if the last index of the array equals target
    return true;                                                  //or the last character in str equals target
  }                                                              //return true                     
  else {
    return false;
  }
}

end('Bastian', 'n');
