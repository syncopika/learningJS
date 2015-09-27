//another partial solution! grrr....

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line;
var table = {};
var arr = [];
var total = 0;

for(i=0;i<a.length;i++){
a = a.replace(' ','').toUpperCase();
a = a.replace(/[\W]/g,'');
}

//get tally of unique letters in string
for(i=0;i<a.length;i++){
if(table[a[i]] === undefined){
   table[a[i]] = 1;
}
else{
table[a[i]] += 1;
}
}

//put tallies of each unique letter in array
for (property in table){
arr.push(table[property])
}
//sort array
arr = arr.sort() //this is ascending!

//multiply 
var count = 27-arr.length;
for(i=0;i<arr.length;i++){
total += arr[i]*count;
count++;
}

console.log(total)
    }
});
