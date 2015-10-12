//my favorite kind of technique! (i think they're called hash tables?)

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = line.split(';');
var b = a[1].split(',');
var table = {};
for(i=0;i<b.length;i++){
  if(table[b[i]] === undefined){
    table[b[i]] = 1;
  }
  else{
    table[b[i]] += 1;
  }
}
for(property in table){
  if(table[property] === 2){
    console.log(property);
  }
}
    }
});
