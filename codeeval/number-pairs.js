//yay partial solution with score of 95

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a  = line.split(';');
var a1 = a[0].split(',');
var b = '';
var ans = '';
for(i=0;i<a1.length;i++){
  var c = '';
  for(j=0;j<a1.length;j++){
 
    if(parseInt(a1[i]) + parseInt(a1[j]) === parseInt(a[1])){
      c += a1[i] + ',' + a1[j] + ';';
    }
  }
  b += c;
}

for(i=0;i<b.length/2 - 1;i++){
  ans += b[i];
}
if(ans === ''){
  ans = 'NULL';
}
console.log(ans)
    }
});

//solved!

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a  = line.split(';');
var a1 = a[0].split(',');
var b = '';
var ans = '';
for(i=0;i<a1.length;i++){
  var c = '';
  for(j=0;j<a1.length;j++){
   if(a1[i] !== a1[j]){  //I forgot this here! try making line = '1,2,4,5;10' without this if statement. 
    if(parseInt(a1[i]) + parseInt(a1[j]) === parseInt(a[1])){
      c += a1[i] + ',' + a1[j] + ';';
    }
   }
  }
  b += c;
}

for(i=0;i<b.length/2 - 1;i++){
  ans += b[i];
}
if(ans === ''){
  ans = 'NULL';
}
console.log(ans)
    }
});
