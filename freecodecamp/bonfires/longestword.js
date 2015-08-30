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
