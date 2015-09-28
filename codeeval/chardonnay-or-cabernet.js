//this is a 'partial' solution

var a = 'Cabernet Merlot Noir | ot'; //var a = line; (the line is fed to var a through the sample code codeeval provides.)
var wineName ='';
var frag='';
var newName='';
var table = {};
for(i=0;i<a.indexOf('|')-1;i++){
  wineName += a[i];
}
for(i=a.indexOf('|')+2;i<a.length;i++){
  frag += a[i];
}
wineName = wineName.split(' ');
frag = frag.split('');

for(i=0;i<wineName.length;i++){
  table[i] = 0;
}

for(i=0;i<wineName.length;i++){
	for(j=0;j<frag.length;j++){
      if(wineName[i].indexOf(frag[j]) > -1){
        table[i] += 1;
      }
    }
}
for(property in table){
  if(table[property] === frag.length){
    newName += wineName[property] + ' ';
  }
}
if(newName === ''){
    newName = 'false';
  }

newName = newName.trim();
console.log(newName)

//score of 97.5! but still partial....:< 6:47 pm, est 092815

ar fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line;
a = a.split('|');
var wineName = a[0].trim();
wineName = wineName.split(' ');
var frag= a[1].trim(); 
var finalName='';

for(i=0;i<wineName.length;i++){
  var table = {}; //create a new table for each wine name
  for(j=0;j<frag.length;j++){
    //find if there's a match for each letter in 2nd string to each wine name
    var reg = new RegExp(frag[j], 'g') //create separate regex for each letter
    if(wineName[i].match(reg) !== null){ //compare with current wine name
     if(table[frag[j]] === undefined){
       table[frag[j]] = 1;
     }
      else{
        table[frag[j]] += 1;
      }
  }
}  
  //check table for each wine name
  var total = 0
  for(property in table){
    total += table[property];
    }

   if(total === frag.length){
      finalName += wineName[i] + ' ';
}
}
if(finalName === ''){
  finalName = 'False';
}

finalName = finalName.trim();
console.log(finalName)
    }
});
