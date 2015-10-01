var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
//I reversed it so that the first (the one that appears first in 'line') word with the longest length will get picked up
var a = line.split(' ').reverse(); 
//compare each word within the array. return the longest one, but if they're the same, return the previous one.
//since we've reversed the array, the 'first' word will always be compared in the end. 
console.log(a.reduce(function(a,b){return a.length > b.length ? a: b}));
    }
});
