var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line;
var rev = '';
a = a.split(' ');
for(i=a.length-1;i>=0;i--){
  rev+=a[i] + ' ';
}
rev = rev.trim();
console.log(rev);
    }
});
