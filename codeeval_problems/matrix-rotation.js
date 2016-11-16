var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line; //i.e. line = 'a b c d'
              // looks like this => a b
              //                    c d
a = a.split(' ');
var final = []
for(i=0;i<a.length;i=i+Math.sqrt(a.length)){
  var arr = [];
  for(j=i;j<i+Math.sqrt(a.length);j++){
    arr.push(a[j]);
  }
  final.push(arr);
}
//console.log(final)

var ans = '';
for(i=0;i<final.length;i++){
  for(j=final.length-1;j>=0;j--){
    ans += (final[j][i]) + ' ';
  }
}
console.log(ans.trim())  //output should be 'c a d b'
                        // => c a
                        //    d b
    }
});
