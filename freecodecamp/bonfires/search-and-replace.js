//replace 2nd argument with 3rd argument where it appears in argument 1

function replace(str, before, after) {
 if(before[0] == before[0].toUpperCase()) {                         //if the first character in "before" is uppercase...
   after = after[0].toUpperCase() + after.slice(1,after.length);   //"after" will be altered to have its first character uppercase too
 }
  else{
    after = after.toLowerCase();          //otherwise, just make sure after is lowercase
  }
 return str.replace(before,after);      //simple implementation of replace method
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
