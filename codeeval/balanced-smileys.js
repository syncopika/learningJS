//partial solution

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line;
var b= '))';
var c = '((';
var d = ')(';
if(a.indexOf(':)(') > -1){
  console.log('YES');
}
else if(a.indexOf(b) > -1 || a.indexOf(c) > -1 || a.indexOf(d) > -1){
  console.log('NO');
}
else{
  console.log('YES');
}
    }
});
