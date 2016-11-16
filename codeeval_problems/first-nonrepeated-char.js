var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line; //i.e. line = 'tooth' output should be 'h'
var b = {};
var c = [];
for(i=0;i<a.length;i++){
  if(b[a[i]] === undefined){
    b[a[i]] = 0;
  }
  else{
    b[a[i]] += 1;
  }
}
for(property in b){
  if(b[property] === 0){
    c.push(a.indexOf(property));
  }
}
console.log(a[Math.min.apply(null, c)])
    }
});
