//convert word to pig latin

function translate(str) {
  var a = ['a','e','i','o','u'];   //set up an array with vowels
  for(i=0;i<a.length;i++){
  if (str[0] === a[i]) {        //if the first letter is a vowel, attach 'way' to the end of the string
     return str + 'way';
  }
  }
  j=0;
  while (j<str.length){
  for (i=0;i<a.length;i++){
    if(str[j] === a[i]){                
      return str.slice(j, str.length) + str.slice(0, j) + 'ay';
    }
   }
  j++;
  }
}

translate("consonant");
