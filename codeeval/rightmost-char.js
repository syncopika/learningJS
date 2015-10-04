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
