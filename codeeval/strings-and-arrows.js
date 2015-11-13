var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a  = line; //i.e. line = '<<>>--><--<<--<<>>>--><' output should be 4. 
var count = 0;
for(i=0;i<a.length;i++){
  var check = '';
  for(j=i;j<i+5;j++){
  check += a[j];
  }
  if(check === '<--<<' || check === '>>-->'){
    count++;
  }
}
console.log(count)
    }
});
