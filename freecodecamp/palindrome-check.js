//check for palindromes
 
 function palindrome(str) {
  var string = '';
  str = str.toLowerCase();
  str = str.replace(/\s+/g,'').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '')  
  //the above replaces any whitespace/unnecessary characters with no space (with Regex) - basically, delete them.
  for(i=str.length-1;i>-1;i--){    
    string += str[i];     //give me the input string backwards
  }
  if(string === str){       //if both strings end up being the same, they are palindromes
  return true;
  }
  else{
    return false;
  }
}
palindrome("eye");
