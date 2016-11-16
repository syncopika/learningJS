var a = '4,79,89,98,48,42,39,79,55,70,21,39,98,16,96,2,10,24,14,47,0,50,95,20,95,48,50,12,42' //var a = line;
a = a.split(',');
var table = {};
for(i=0;i<a.length;i++){
  if(table[a[i]] === undefined){
    table[a[i]] = 1;
  }
  else{
    table[a[i]] += 1;
  }
}
var answer = '';
for(property in table){
  if(table[property] > (a.length/2)){
    answer += property;
  }
}
if(answer === ''){
  answer = 'None';
}
console.log(answer)
