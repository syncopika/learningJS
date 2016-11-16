var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.split('|');
var b = a[0].trim().split(' ');
var c = a[1].trim().split(' ');
var d = '';
for(i=0;i<b.length;i++){
  d += b[i]*c[i] + ' ';
}
console.log(d.trim());
    }
});
