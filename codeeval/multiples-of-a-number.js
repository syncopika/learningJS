var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line; //i.e. line = '13,8' output should be 16.
a = a.split(',');
var b = parseInt(a[1]);
a = parseInt(a[0]);
while(b < a){
  b = b*2;
}
console.log(b)
    }
});
