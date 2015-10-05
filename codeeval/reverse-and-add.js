//works, but stack size exceeded in codeeval. maybe the integer given is already a string?

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
