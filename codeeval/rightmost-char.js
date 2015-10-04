//partial solution. 
//you need to make it so that if the string was like 'Helloz Wzorl,z', the answer would be string[0].length, not 5
//which is what the program currently gives ('cause it just finds the first match and returns the index)

var a = 'Hello World,r'.split(',') //var a  = line;
var ans = '';
for(i=a[0].length;i>=0;i--){
  if(a[i] === a[1]){
    ans = a[0].indexOf(a[i]);
  }
}
if(ans === ''){
  ans = '-1';
}
console.log(ans)

//almost there i think. just need to get -1 as an option if there is no match.
var a = 'Hello CodeEval,z'.split(',')
var ans = -1;
var b = a[0].split('').reverse();
for(i=0;i<a[0].length;i++){
  if(a[i] === a[1]){
    ans = a[0].length - 1 - b.indexOf(a[i]);
  }
}
console.log(ans)
