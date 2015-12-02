var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line; //a = 'hello 11001'
a = a.split(' ')
var b = '';
for(i=0;i<a[0].length;i++){
  if(a[1][i] === '1'){
    b += (a[0][i]).toUpperCase();
  }
  else{
    b += a[0][i];
  }
}
console.log(b) //output = 'HEllO' 
    }
});
