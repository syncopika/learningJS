//again only a partial solution grrrrr

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var s = line;

//isolate first number in string to be n
var n = parseInt(s[0]);
var newStr = '';
var arr = [];

//get all numbers in new string so we can split (exclude the semicolon and n)
for(i=2;i<s.length;i++){
   newStr += s[i];
}

//get all numbers to be proper integers so we can add them
//the array will have all the numbers we care about
arr = newStr.split(' ');
arr = arr.map(function(a){return parseInt(a)});

var totals =[];

//we need to look at several chunks of the string.
//chunk size is dictated by n, and the number of possible chunks
//is dictated by the array length divided by 2
for(i=0;i<Math.round(arr.length/2)+1;i++){
  var total = 0;
  for(j=i;j<n+i;j++){
    total += arr[j];
  }
  totals.push(total);
}
var answer = Math.max.apply(Math, totals);
//if answer is not a positive integer...
if(!(answer > 0)){
  answer = 0;
}
console.log(answer)
    }
});
