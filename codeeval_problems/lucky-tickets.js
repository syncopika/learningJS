//CAUTION i'm still not getting the answers given by codeeval. and this code gets REALLY SLOW past a=4. so fix it. :P

function sum(numstring){
  var a = numstring.split('');
  a = a.map(function(num){return parseInt(num)});
  var total = a.reduce(function(a,b){return a + b});
  return total;
}

var a = 4;
var b = '';
var c = '1';
for(i=0;i<a;i++){
  b += 9;
}
for(i=1;i<a;i++){
  c += 0;
}

var count = 1;
for(i=c;i<=b;i++){
  var num = '' + i;
  var half1 = num.substring(0,num.length/2);
  var half2 = num.substring(num.length/2, num.length);
  if(sum(half1) === sum(half2)){
      console.log(num);
      count++;
  }
}
console.log(count)
