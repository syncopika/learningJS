//hmmm..when I try this out in Eloquent Javascript, it works fine!
//In codeEval, it's a failure :<
//the failure is because for a[i+1].match..., a[i+1] eventually becomes undefined and so match can't work on it.  

var a = '(--9Hello----World...--)' //var a = string
var str = '';
for(i=0;i<a.length;i++){
  //check if each character in line is a letter
  if(!a[i].match(/[\W_0-9]/g)){
    //if it is a letter, check the character in front of it
    //so that we know where to put a space
    if(a[i+1].match(/[\W_0-9]/g) !== null){
      str += a[i] + ' ';
    }
    else{
      str += a[i];
    }
  }
}
var ans = str.toLowerCase().trim();
console.log(ans)

//ok simple solution...took me too long. just add the additional condition 'if (a[i+1] !== undefined &&....)' !

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line;
var str = '';
for(i=0;i<a.length;i++){
  if(!a[i].match(/[\W_0-9]/g)){
    //a bit long, but gets the job done
    if(a[i+1] !== undefined && a[i+1].match(/[\W_0-9]/g) !== null){
      str += a[i] + ' ';
    }
    else{
      str += a[i];
    }
  }
}
var ans = str.toLowerCase().trim();
console.log(ans)
    }
});
