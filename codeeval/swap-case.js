var a = 'Hello world!';
var ans = '';
for(i=0;i<a.length;i++){
  if(a[i] === a[i].toUpperCase()){
    ans += a[i].toLowerCase();
  }
  else if (a[i] === a[i].toLowerCase()){
    ans += a[i].toUpperCase();
  }
}
console.log(ans)
