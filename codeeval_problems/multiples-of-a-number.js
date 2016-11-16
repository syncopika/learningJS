//not sure why it's not fully correct... :<

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {
var a = line; //i.e. line = '13,8' output should be 16.
a = a.split(',');
var b = parseInt(a[1]);
a = parseInt(a[0]);
while(b <= a){ //the equal sign is important!
  b = b*2;
}
console.log(b)
    }
});

//6:03 pm est 010216
//you're an idiot...-_- there were quite a few things you missed...see below...-___-
//this one is 100% btw...
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {

if (line != "") {
var a = line;
a = a.split(',');
var b = parseInt(a[1]);
a = parseInt(a[0]);
var c = b;

//add the second number to itself each time, not multiply by 2!! 
while(b < a){ 
  b = b+c;
}

//what if both numbers are the same!?
if(a===c){
  console.log(a);
}
else{
console.log(b)
}
    }
});
