//can't seem to get this to work but I think it's cause I'm misunderstanding how the file reading works... :/
//the general process though I think works. I tested a string a like this: 

//EXAMPLE TEST

var a = '2 \n hey there \n hola \n ok hi \n no'
var table = {};
a = (a.split('\n'))
var n = a[0];
for(i=1;i<a.length;i++){
  a[i] = a[i].trim();
  if(table[i] === undefined){
    table[i] = a[i].length;
  }
}
console.log(table)
var b = [];
for(property in table){
  b.push(table[property]);
}
b = b.sort().reverse();
var c = [];
for(i=0;i<b.length;i++){
  for(property in table){
    if(table[property] === b[i]){
      c.push(a[property]);
    }
  }
}
for(i=0;i<n;i++){
console.log(c[i])
}

//output:
//hey there
//ok hi

/////END EXAMPLE

var a = [];
var n;
var table = {};
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
if(typeof line === 'number'){
n = line;
}
else{
a.push(line);
}
}
});

for(i=0;i<a.length;i++){
  a[i] = a[i].trim();
  if(table[i] === undefined){
    table[i] = a[i].length;
  }
}

var b = [];
for(property in table){
  b.push(table[property]);
}
b = b.sort().reverse();

var c = [];
for(i=0;i<b.length;i++){
  for(property in table){
    if(table[property] === b[i]){
      c.push(a[property]);
    }
  }
}

for(i=0;i<n;i++){
console.log(c[i])
}


//ok here's a partial solution
var a = [];
var n = 0;
var table = {};
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
if(typeof parseInt(line) === 'number' && line.length === 1){ //make sure line.length is equal to 1!
n += line;
}
else{
a.push(line);
}
}
});

for(i=1;i<a.length;i++){
  a[i] = a[i].trim();
  if(table[i] === undefined){
    table[i] = a[i].length;
  }
}

var b = [];
for(property in table){
  b.push(table[property]);
}
b = b.sort().reverse();

var c = [];
for(i=0;i<b.length;i++){
  for(property in table){
    if(table[property] === b[i]){
      c.push(a[property]);
    }
  }
}

var i = 0;   //for some reason I'm unsure of right now, the while loop gave me some success. :/
while(i<n){
console.log(c[i]);
n++;
}
