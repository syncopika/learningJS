//my solutions to exercises on Free Code Camp (thanks Free Code Camp!)

//reverse a string

function reverseString(str) {
  var b = '';     //set up empty string
  for (i=str.length-1; i>-1; i--){    //look at the string you want reversed BACKWARDS
    b += str[i];    //add contents of string you want reversed to the empty string
  }
  return b;    //when loop is done, give me the complete reversed string
}

reverseString('hello');


//factorialize a number

function factorialize(num) {   
  var total = 1;    
  for(i=num;i>0;i--){     //multiply next number backwards from "num"
   total = i* total
 }
  return total;
}
factorialize(5);

//PROTIP - recursion is great here!

function factorialze(num){
 if(num == 0){
 return 1;
 }
 else{
 return num * factorialize(num-1);
 }
 }
 
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

//find the longest word in a string
function findLongestWord(str) {
  str = str.split(' ');    //give me an array of the string -> every index should be one word
  var a = [];   
  for (i=0;i<str.length;i++){
    a.push(str[i].length);  //give me an array of the string but now with just the length of each word ->every index should be its word's length                  
  }
  console.log(str)   //this is just to check to make sure everything is working as I think it should
  console.log(a)         //this is just to check to make sure everything is working as I think it should
  function getMaxOfArray(numArray) {        //with an array of each word length, I can find the largest number
  return Math.max.apply(null, numArray);    //need to set up this function first because Math.max doesn't take arrays naturally??
}
  return getMaxOfArray(a);     //gets me length of longest word

}

findLongestWord('The quick brown fox jumped over the lazy dog');

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
