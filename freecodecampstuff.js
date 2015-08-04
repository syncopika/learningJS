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

//return largest number of each of a set of arrays
function largestOfFour(arr) {
  var b = [];
  function maxArray(array){      //have to apply the Math.max function manually to arrays
    return Math.max.apply(null, array);
  }
  for(i=0;i<arr.length;i++){   //for each array within the array, get me the largest number and put it in a new array
    b.push(maxArray(arr[i]))
  }
  return b;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

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

//repeat a string as many times as "num"
function repeat(str, num) {
  var string = '';
  while(num>0){    //count backwards from num
    string += str;   //every increment => add str once
    num -= 1;        
  }
  return string;    //new string should have "str" x "num"
}

repeat('abc', 3);

//truncate a string
function truncate(str, num) {
  if (str.length > num){          //if length of str is the same as num, no truncation is needed
  return str.slice(0,num-3) + '...';   //just give me the section of str that is between the first character and
}                                      // 3 characters before the last (which will be replaced with ellipses)
else{
  return str;
}
}

truncate('A-tisket a-tasket A green and yellow basket', 11);

//slasher flick (delete the first (howMany, i.e. 2, 3) indices in the array)
function slasher(arr, howMany) {  
  var diff = arr.length - howMany;   //let's get the diff between array length and howMany -> this tells us how many
  var newArr = [];                  // indices in the array to preserve (in this example, only one)
  if (howMany > 0){      //if howMany is 0, no deleting is necessary
  for(i=arr.length-1; i>arr.length-diff-1;i--){   //traverse the array backwards! (up to the index that equals diff)
    newArr.push(arr[i]);       //we want to save the array indices in the back because the front ones will be deleted
  }
  }
  else{
    return arr;
  }
  return newArr;   //our saved indices go here
}

slasher([1, 2, 3], 2);

//falsey bouncer (remove false, negative-connotating items)
function bouncer(arr) {
  return arr.filter(function(value){
      return value !== false && 
             value !== null && 
             value !== 0 &&
        value !== undefined &&
        value !== ('') &&
        value !== isNaN;
  });
}

bouncer([7, 'ate', '', false, 9]);

//where art thou   
function where(collection, source) {
  var arr = [];
  for (i=0;i<collection.length;i++){ //go through each index in the array 
    for (property in collection[i]){    //each index happens to be an object, so for each property in each index...
      if(source[property] === collection[i][property]){  //if the value of property in source is the same as
        arr.push(collection[i]);                        //one in one of the properties of the objects
      }                                                 //give me the object
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

//mutations (tell me if all the characters in the 2nd index in arr are in the 1st index)
  function mutation(arr) {
  var str1 = arr[0].toLowerCase().split(''); //get index 1/2 of the array separated into a new array so we can evaluate 
  var str2 = arr[1].toLowerCase().split(''); // each character individually
  var table = {true:0, false:0};          //I use a table to compare the two new arrays - each true equals one match in shared character
  for (i=0; i<str2.length; i++){       
    if (str1.indexOf(str2[i]) === undefined){
      table["false"]+=1;
    }
    if (str1.indexOf(str2[i]) < 0){    
      table["false"]+=1;
    }
    else{
      table["true"]+=1;
    }
  }
  if (table.true === str2.length){
    return true;}
  else{
    return false;
   }
  }
mutation(['hello', 'hey']);
