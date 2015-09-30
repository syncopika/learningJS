//example line: '3Kucdq9bfCEgZGF2nwx8UpzQJyHiOm0hoaYP6ST1WM7Nks5XjrR4IltBeDLV vA| 2 26 33 55 34 50 33 61 44 28 46 32 28 30 3 50 34 61 40 7 1 31'

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line
var b = a.split('|')[0]
var c = a.split('|')[1].trim().split(' ')
var string = '';
//tricky part! - the position given by the numbers is starting from 1, not 0. thus, number-1. 
c.forEach(function(number){return string += b[number-1]})
console.log(string)
    }
});

//output should be 'Kyotaro Nishimura 1930'
