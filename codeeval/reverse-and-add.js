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

//score of 80
//codeeval instructions kinda suck -__-

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
//set tally to 0 for each new number
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
  console.log('no palindrome')
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

