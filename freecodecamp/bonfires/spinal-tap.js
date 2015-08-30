//put dashes between all letters. make sure all letters are lowercase.

function spinalCase(str) {
  var newstr = '';            
  var arr = str.split('');   //make array from string 
                            
  for(i=0;i<str.length;i++){      //traverse the string
    
    if(!(str[i]).match(/[a-z]/g)){  //check if each character in string is NOT a letter  (using regex)
                                    //if it is NOT a letter, then...
     for(i=0;i<str.length;i++){             
   newstr += str[i].replace(/[_ ]/g,'-');    //replace that character with a dash (if it is a letter, it'll still get added to var newstr)
  }                               
  return newstr.toLowerCase();
    }
   
  else if ((str[i]).match(/[a-z]/g)) {      //this is a second case, if there are no non-alpha characters
  for(i=0;i<arr.length;i++){
    if((arr[i].toUpperCase() == arr[i])){
     arr[i] = ' ' + arr[i];               //if there's an upper case letter, put a space in front of it (we'll replace it with a dash)
    }
  }
  var a = arr.reduce(function(a,b){return(a).concat(b);});
  a = a.replace(/[_ ]/g,'-');
  return a.toLowerCase();
  }
  
  }
  
}


spinalCase('This Is Spinal Tap');
