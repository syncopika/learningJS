var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.split(',') //i.e. line = '1,2,2,2,3,3,4,14' 
var b = [];
for(i=0;i<a.length;i++){
  if(!b.some(function(num){return num === a[i]})){
    b.push(a[i]);
  }
}
console.log(b.toString())

    }
});
