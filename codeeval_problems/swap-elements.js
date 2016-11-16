//example: '1 2 3 4 5 6 7 8 9 10 : 0-1, 1-3' But don't forget about double digits! i.e.
// '1 2 3 4 5 6 7 8 9 10 11 12 : 0-10, 1-11' => how do I capture those double digits? 

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.split(':')
var b = a[0].trim().split(' ');
var c = a[1].trim().split(', ');

for(i=0;i<c.length;i++){
  var d = c[i].split('-');
  var e = d[0];
  var f = d[1];
  var hold = b[e];
  b[e] = b[f];
  b[f] = hold;
}
var answer = '';
for(i=0;i<b.length;i++){
  answer += b[i] + ' ';
}
console.log(answer.trim())
    }
});
