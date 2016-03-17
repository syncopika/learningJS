//another partial solution! grrr....
//3-17-16 check out this string => 'AoB!bC#c@c$$$'
//and then check out the resulting table: {A: 1, O: 1, B: 2, C: 3}
//the letters aren't sorted properly!! :O

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line;
var table = {};
var arr = [];
var total = 0;

for(i=0;i<a.length;i++){
a = a.replace(' ','').toUpperCase();
a = a.replace(/[\W_0-9]/g,'');
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
