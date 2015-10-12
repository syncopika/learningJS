//i wouldn't call this simple...:/

//example input = '-37.507 -3.263 40.079 27.999 65.213 -55.552'
//output should be: '-55.552 -37.507 -3.263 27.999 40.079 65.213'

function compare(number1, number2){
  return number1 - number2;
}   
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var b = line.split(' ')
for(i=0;i<b.length;i++){
  b[i] = parseFloat(b[i]);
}
b = b.sort(compare); //use compare function in sort()
b = b.map(function(number){return number.toFixed(3)})
var ans = '';
b.forEach(function(a){return ans += a + ' ';})
ans.trim();
console.log(ans)
    }
});
