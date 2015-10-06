//works, but stack size exceeded in codeeval. 
//try a number like 196. stack size will be exceeded.
//it's weird though cause we're supposed to assume that there will be an answer!! grrrr

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var tally = 0;

function palindrome(number){
var a = number;
a = a.toString();
var b = '';
for(i=a.length-1;i>=0;i--){
  b += a[i];
}
if(parseInt(b) === parseInt(a)){
  console.log(tally + ' ' + a);
}
else{
  a = parseInt(a) + parseInt(b);
  tally++;
  palindrome(a);
}
}

palindrome(line);
    }
});

//score of 80...and then 70!?..now 75!?
//codeeval instructions kinda suck -__-

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
//set tally to 0 for each new number =>note that this actually does not occur (i.e. tally will accumulate and carry over)
var tally = 0;

//set up function
function palindrome(number){
var a = number;
a = a.toString();
var b = '';
for(i=a.length-1;i>=0;i--){
  b += a[i];
}
if(tally === 100){
  //move on
  //for 75% accuracy...don't forget to reset tally! (although I thought it would reset to 0 for each new number...)
  tally = 0;
  console.log('no palindrome here')
}
else{
if(parseInt(b) === parseInt(a)){
  console.log(tally + ' ' + a);
}
else{
  a = parseInt(a) + parseInt(b);
  tally++;
  palindrome(a);
}
}
}

 palindrome(line);
    }
});

//ahh i've got it! error is indeed partially mine
//compare the answer for if number = 195 for the program below and the one above ;)
//sadly, the one below still does not yield 100% correct...

var tally = 0;

function palindrome(number){
var a = number;
a = a.toString();
var b = '';
for(i=a.length-1;i>=0;i--){
  b += a[i];
}
if(tally === 100){
  //move on
  //this tally reset is important
  tally = 0;
  console.log('')
}
else{
if(parseInt(b) === parseInt(a)){
  console.log(tally + ' ' + a);
  //but also a tally reset here is necessary!
  //otherwise the tally count will carry over for the next number
  tally = 0;
}
else{
  a = parseInt(a) + parseInt(b);
  tally++;
  palindrome(a);
}
}
}
