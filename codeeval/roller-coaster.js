var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line; //i.e. line = 'The slings and arrows of outrageous fortune.'
var b = a[0];
var index = 0; //index will refer to the previous letter when we get to the loop
a = a.replace(a[0], a[0].toUpperCase());
a = a.split('');
for(i=1;i<a.length;i++){
  var match = a[i].match(/[a-zA-Z]/g);
     if(match !== null && a[index] === a[index].toUpperCase()){
       a[i] = a[i].toLowerCase();
       index = i; //update var index to current letter's index
       b += a[i];
     }
     else if(match !== null && a[index] === a[index].toLowerCase()){
       a[i] = a[i].toUpperCase();
       index = i;
       b += a[i];
     }
     else{
       b += a[i];
     }
}
console.log(b)
    }
});
