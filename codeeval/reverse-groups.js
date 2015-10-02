//partial...score of 75 -__- 10:30pm est 093015

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line.split(';') //i.e. 1,2,3,4,5;2
var b = parseInt(a[1]);
a = a[0].split(',');
var n;
if(a.length%2 === 0){
  n = a.length;
}
else{
  n = a.length-b;
}
var newArr = [];
for(i=0;i<n;i=i+b){
  var subArr = [];
  for(j=i;j<b+i;j++){
    subArr.push(a[j]);
  }
  subArr = subArr.reverse();
  newArr.push(subArr); 
}
newArr = newArr.reduce(function(arr1,arr2){return arr1.concat(arr2)})

a.forEach(function(num){if(newArr.indexOf(num) === -1){newArr.push(num)}})

console.log(String(newArr))
    }
});

//output should be 2,1,4,3,5

//5:17 pm est 10/02/15 solved it!
var a = '1,2,3,4,5,6,7,8,9,10;4'.split(';') //i.e. 1,2,3,4,5;2
var b = parseInt(a[1]);
a = a[0].split(',');
var n = a.length - (a.length%b);
var newArr = [];
for(i=0;i<n;i=i+b){
  var subArr = [];
  for(j=i;j<b+i;j++){
    if(a[j] === undefined){
      break;
    }
    else{
    subArr.push(a[j]);
  }
  }
  subArr = subArr.reverse();
  newArr.push(subArr); 
}

newArr = newArr.reduce(function(arr1,arr2){return arr1.concat(arr2)})

a.forEach(function(num){if(newArr.indexOf(num) === -1){newArr.push(num)}})
console.log(String(newArr))
