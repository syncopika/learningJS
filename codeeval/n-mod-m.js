var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.split(',');
var b = parseInt(a[1]);
a = parseInt(a[0]);
console.log(a-(b*Math.floor(a/b)))
    }
});
