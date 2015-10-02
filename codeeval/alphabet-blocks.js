//got a 92.5%! but only ~55 ranking points...

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.split('|'); //i.e. '4 | DOG | UPZRHR INOYLC KXDHNQ BAGMZI'
var b = a[1].trim().split('');
var c = a[2].trim().split(' ');
var truthTable = [];
for(i=0;i<c.length;i++){
  for(j=0;j<b.length;j++){
    if(c[i].indexOf(b[j]) !== -1){
      truthTable.push('true');
      b[j] = 0; //change b[j] value to avoid duplicates
    }
  }
}
if(truthTable.length === b.length){
  console.log('True');
}
else{
  console.log('False')
}
}
});

//we have a problem. only one word block can match one letter. if a word block contains two letters that match the word,
//it can only be allowed to match one letter
//I thought adding a break; would help. it didn't really :< dropped to 87.5%...but ~69 points...

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = line.split('|');
var b = a[1].trim().split('');
var c = a[2].trim().split(' ');
var truthTable = [];
for(i=0;i<c.length;i++){
  for(j=0;j<b.length;j++){
    if(c[i].indexOf(b[j]) !== -1){
      truthTable.push('true');
      b[j] = 0; //change b[j] value to avoid duplicates
      break; //break would prevent using the same block for more than one letter
    }
  }
}
if(truthTable.length === b.length){
  console.log('True');
}
else{
  console.log('False')
}
    }
});
    
