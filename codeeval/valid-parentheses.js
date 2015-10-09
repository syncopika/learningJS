//partial solution...

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = line; //i.e. line = '([)]' - should be False, '()' is True
var b = a.indexOf('(')
var c = a.indexOf(')')
if(a[b-1] === a[c+1]){
  console.log('True');
}
else{
  console.log('False');
}
    }
});
