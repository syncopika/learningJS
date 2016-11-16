
/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line;
var final = '';
final = final+a; //get integer into a string so we can split it
a = final.split('');
final=0;
for(i=0;i<a.length;i++){
  final+=parseInt(a[i]);
}
console.log(final);
    }
});
