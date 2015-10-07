var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line; //i.e. 'thisTHIS'
var up = 0;
var down = 0;
var total = a.length;
for(i=0;i<a.length;i++){
  if(a[i].match(/[A-Z]/g) !== null){
    up++;
  }
  else if(a[i].match(/[a-z]/g) !== null){
    down++;
  }
}
up = (up/total)*100;
down = (down/total)*100;  
console.log('lowercase: ' + (down).toFixed(2) + ' '+ 'uppercase: ' + (up).toFixed(2))
    }
});
