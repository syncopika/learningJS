var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = parseInt(line);  //i.e. line = '10' output = 2,3,5,7
var b = '2,';
for(i=3;i<a;i++){
  var total = 0;
  for(j=2;j<i;j++){
    if(i%j === 0){
    total = 0;
    break;
    }
    else{
    total = i;
  }
}
  if(total !== 0){
  b += total + ',';
  }
}
b = b.substring(0,b.length-1)
console.log(b)
    }
});
