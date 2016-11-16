var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = line.split(' '); //line = '(25, 4) (1, -6)'
var b = [];
for(i=0;i<a.length;i++){
   var digit = '';
   for(j=0;j<a[i].length;j++){
     if(a[i][j].match(/[0-9]/g) !== null || a[i][j].match(/-/g) !== null){
       digit += a[i][j];
     }
   }
   b.push(digit);
}
var deltaY = parseInt(b[3]) - parseInt(b[1]); 
var deltaX = parseInt(b[2]) - parseInt(b[0]);
console.log(Math.sqrt((deltaY*deltaY) + (deltaX*deltaX)));
    }
});

