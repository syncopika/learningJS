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

var fs  = require("fs");
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

//4:59 pm est 093015 yes, solved!! :D
//the tricky part is that when you compare a wine name with the fragment of letters, you have to make sure that a
//wine name has at least the same number of letters (for each letter if there are multiple).
//i.e. 'xxax xaxax | xxxaa' - the first 'name' (lol that's not even a wine) should not be printed because although it 
//has 3 x's, it doesn't have 2 a's, which is necessary to fully meet the conditions.

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line;
var table = {};
var wineName = a.split('|')[0].trim().split(' ');
var frag = a.split('|')[1].trim()
var frag2 = [];
var finalName = '';
//we need an array of just the unique characters (no duplicates). we'll loop through this in a bit...
for(i=0;i<frag.length;i++){
  if(frag2.indexOf(frag[i]) === -1){
    frag2.push(frag[i]);
  }
}
//set up a table so we can tally up the unique characters in the fragment
for(i=0;i<frag.length;i++){
  if(table[frag[i]] === undefined){
    table[frag[i]] = 1;
  }
  else{
    table[frag[i]] += 1;
  }
}
//let's go through each wine name and compare how many of each unique letter from frag2 is in each wine name
//if each letter has the same total (or more) as in the table, then we'll put that wine name in a new string.
for(i=0;i<wineName.length;i++){
  //this truth table will help log if the totals for each letter is equal to or more than the totals given in my table
  //if the total for a letter in the fragment is less than what's stated in the table, put false in the truth table.
  var truthTable = [];
  for(j=0;j<frag2.length;j++){
    var regx = new RegExp(frag2[j], 'g'); //make sure to use global, which finds all the occurrences in a string!
    //.match is really helpful in finding out how many of a specified letter is in a word. it returns an array.
    if((wineName[i].match(regx)) !== null){
    if((wineName[i].match(regx)).length >= table[frag2[j]]){
      truthTable.push(true);
    }
    else{
      truthTable.push(false);
    }
    }
    else{
      truthTable.push(false);
    }
  }
  //if there is NOT a false in my truth table (i.e. everything is true)...add the wine name
  if(!truthTable.some(function(el){return el === false})){
    finalName += wineName[i] + ' ';
  }
}

if(finalName === ''){
  finalName = 'False';
}
console.log(finalName.trim())

    }
});
