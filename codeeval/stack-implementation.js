var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = line.split(' ');
var b = '';
for(i=a.length-1;i>=0;i=i-2){
    b += a[i] + ' ';
}
console.log(b.trim())
    }
});
