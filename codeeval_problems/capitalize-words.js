var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line.split(' '); //i.e. line = 'javascript language' => 'Javascript Language'
var ans = '';
a = a.map(function(word){return word.replace(word[0], word[0].toUpperCase())})
a.forEach(function(word){return ans += word + ' '})
console.log(ans.trim())
    }
});
