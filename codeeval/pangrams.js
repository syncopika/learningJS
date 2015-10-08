var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.toLowerCase(); //i.e. line = 'A slow yellow fox crawls under the proactive dog'
var alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
var alphabet2 = {};
for(i=0;i<alphabet.length;i++){
  if(alphabet2[alphabet[i]] === undefined){
    alphabet2[alphabet[i]] = 0;
  }
}
for(i=0;i<a.length;i++){
  for(property in alphabet2){
  if(property === a[i]){
    alphabet2[property] += 1;
  }
  }
}
var answer = '';
for(property in alphabet2){
  if(alphabet2[property] === 0){
    answer += property;
  }
}
if(answer === ''){
  answer = 'NULL';
}
console.log(answer)
    }
});
