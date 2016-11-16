//only 80%. partial solution. 

//example inputs:
//Hello,ell
//This is good, is
//CodeEval,C*Eval
//Old,Young


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.split(',');
var b = a[0].split('');

//this allows an escapable character to be considered part of the string
//I need to figure out how to deal with a regular asterisk though (i.e. in regex, asterisks act as placeholders for multiple chars)
if(b.some(function(ele){return ele === '\\'})){
  a[0] = '';
  b.forEach(function(ele){a[1] += ele!=='\\'});
}

var ans = '';
for(i=0;i<a[0].length;i++){
  var frag = '';
  var start = i;
  var end = i+a[1].length;
  for(j=start;j<end;j++){
    frag += a[0][j];
  }
  if(frag === a[1]){
    ans = 'true';
    console.log(ans);
    break;
  }
}
if(ans === ''){
  console.log('false');
}
    }
});
