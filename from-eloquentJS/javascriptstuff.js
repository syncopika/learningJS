
//making a triangle with while loop                

var num = 0;                  
var str = '';                    
while (num < 7){                     
   num+=1;                    
   str+='#';                        
   console.log(str);  
}   



//FizzBuzz                                 

for (var num = 1; num < 101; num++){             
  if (num%3 == 0 && num%5 == 0)               
      console.log("FizzBuzz")                     
  if (num%3 == 0)                                    
      console.log("Fizz")                                
  if (num%5 == 0)   
      console.log("Buzz")
  else 
      console.log(num)                       
}   


//chess board

var size = n;   
var board = '';
for (var i=0; i < n; i++){
   for (var j=0; j < n; n++){
     if ((i+j)%2 == 0)
         board += ' ';
     else
         board += '#';}
  board += '\n'  //add a newline after one row is complete (inner loop controls x-axis, outer loop is the y-axis)
}  


function sum(array) {
  var total = 0;
  for (var i=0;i<array.length;i++)
    total = array[i] + total;
  return total;
}

/////////  05/03/15  
function range(start, end, step) {
  var array = [];
  if (step == undefined){
    step = 1;
  }
  for (i=start; i<=end;i=i+step) {
    array.push(i);
  }
  if (step < 0) {
    for (i=start; i>=end; i=i+step){
      array.push(i);
    }}
  return array;
}
//////

//making new array
function reverseArray(array){
  var newArray = [];
  for (var count = array.length-1; count >= 0; count=count-1) {
    newArray.push(array[count]);
  }
  return newArray;
}

/////modifying an array
///very much like bubble sort?

function reverseArrayInPlace(arrayValue) {
  var hold = null;
  var j = 0;
  while (j < arrayValue.length-1) {
    for (i=0;i<arrayValue.length-1;i++){
      if (arrayValue[i] < arrayValue[i+1]){
        hold = arrayValue[i];
        arrayValue[i] = arrayValue[i+1];
        arrayValue[i+1] = hold;
      }
    }
    j++;
  }
  return arrayValue;
}

function arrayToList(array){
  var list = {};
  var newArray = array;   //the slice that was here was unnecessary
  list.value = array[0];
  if (newArray[0] == array[array.length-1]) 
    list.rest = null;
  else
    list.rest = arrayToList(array.slice(1,array.length));
  return list;
  }
  
function listToArray(list) {
  var newArray = [];
  for (var node = list; node; node = node.rest){
    if (node.rest == null) {
      newArray.push(node.value);
  }
    else {
      newArray.push(node.value);
      listToArray(node.rest);}
}
  return newArray;
}

//// 05/14/15 
prepend function

function prepend(element, list){
  var newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}

///// 05/15/15 

function nth(list, number){
  var a = listToArray(list);
  for (var node = list; node; node = node.rest){
  if (node.value == a[number])
    return node.value;
  else
    nth(list.rest, number);
}
}

05/20/15

//learned something interesting today:

var obj = {here: {is: "an"}, object: 2};
console.log(obj);
console.log({here: {is: "an"}, object: 2})
console.log(obj == {here: {is: "an"}, object: 2})

/*this is the output:

{here: {is: "an"}, object: 2}
{here: {is: "an"}, object: 2}
false

clearly the variable object and explicitly stating what object is are exactly the same.
but the computer doesn't see that! 

that's why this " if (value1 !== value2){ }" is causing the condition in which I compare
the values of two values to return false when it should be true (because they're two lists).

///// still having problems though....
*/

///// 05/22/15 still the same problem - but i think this may better resemble the right answer...
///going to move on for now..

function deepEqual(value1, value2){
  if (typeof value1 !== "object" && typeof value2 !== "object"){
    return false;} 
  if (value1 === value2){
    return true;}
  if (typeof value1 === "object" && typeof value2 === "object"){
    var array1 = [], array2 = [];
  for (property in value1){
    array1.push(property);
  }
  for (property in value2){
    array2.push(property);
  }
    if (array1.length !== array2.length) {
      return false;}
    if (array1.length === array2.length){
      for (property in value1){
        if (value1[property] === value2[property])
          return true;
        else
          deepEqual(value1[property], value2[property]);
      }}}}


////// 05/24/15 
////find the number of times each word appears in a string! I did it! :D and it only took ~6 hours...(but mostly because of fooling around)

var str = "i went to school school today today today"; //example string
str = str.split(' ');
var list = {};

for (i=0; i < str.length; i++){   //this takes every unique word in a string and puts it in the list. interestingly, even if a word shows up multiple times, the list will only take it once.
  list[str[i]] = 0;
}
for (i=0;i<str.length;i++){
  for (property in list){
    if (str[i] == property){
      list[str[i]] += 1;
    }
  }
}
console.log(list)

///here's the output for this example: {i: 1, went: 1, to: 1, school: 2, today: 3}


