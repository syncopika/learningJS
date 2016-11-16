var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = line; /i.e. line = 20 -> should output 4
var total = 0;
var b = Math.floor(a/5);
a = a - b*5;
total += b;
var c = Math.floor(a/3);
total += c;
a = a - c*3;
var d = Math.floor(a/1);
total += d;
console.log(total)
    }
});
