//title case a sentence

function titleCase(str) {
  string = str.split(' ');  //set up array of str
  newString = '';           
  for(i=0;i<string.length;i++){
    newString += string[i][0].toUpperCase() + string[i].slice(1,string[i].length).toLowerCase() + ' ';
  }                            //this for loop takes the first character of each word in the array, 
                               //uppercases it, then takes the rest of the word and lowercases it 
                               //and adds both together. the added space puts a space between each word.
                               
  newString = newString.slice(0, newString.length-1);   
  //the above takes away the additional space that would appear after the last word of the sentence.
  return newString;   
}

titleCase("I'm a little tea pot");
