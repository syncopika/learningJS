var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
var a = line.split(' '); //i.e. line = '4Always0 5look8 4on9 7the2 4bright8 9side7 3of8 5life5'
var final = '';
for(i=0;i<a.length;i++){
  var answer = '';
  var a1 = a[i].split('');
  var last = a1[a1.length-1];
  var hold = a1[0];
  a1[0] = last;
  a1[a1.length-1] = hold;
  a1.forEach(function(char){return answer += char})
  final += answer + ' ';
}
console.log(final.trim())  //output should be '0Always4 8look5 9on4 2the7 8bright4 7side9 8of3 5life5'
    }
});
