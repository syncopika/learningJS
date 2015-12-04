//only a partial solution (52.5%). maybe because I neglected the possibility of going up a row?

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var word = line;
var b = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']];
var c = word; //i.e. 'ABCCE' = True, 'ABCF' = False
var d = [];
for(i=0;i<b.length;i++){
  for(j=0;j<c.length;j++){
    if(b[i].indexOf(c[j]) > -1){
      var index = b[i].indexOf(c[j]);
      d.push([i, index]);
      b[i][index] = 0;
    }
    else{
      c = c.substring(j, c.length);
      break;
    }
  }
  if(d.length === word.length){
    break;
  }
}

//console.log(d)
var ans = '';
for(i=1;i<d.length-1;i++){
  var coord = '';
  d[i+1].map(function(a){return coord += a});
  var left = '' + d[i][0] + (d[i][1] - 1);
  var right = '' + d[i][0] + (d[i][1] + 1);
  var down = '' + (d[i][0] + 1) + (d[i][1]);
 
  if(coord === left || coord === right || coord === down){
    ans = 'True';
  }
  else{
    ans = 'False';
    break;
  }
}
if(d.length !== word.length){
  ans = 'False';
}
console.log(ans);   
    }
});
