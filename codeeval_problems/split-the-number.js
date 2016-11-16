
var a = '12345 a+bcde' //line
var b = a.split(' ')[0];
var c = a.split(' ')[1];
var e = [];

var operator;
for(i=0;i<c.length;i++){
  if(c[i] === '-' || c[i] === '+'){
   operator = c[i];
  }else{
  e.push(c[i]);
}
}
//console.log(e)
var d = {};
for(i = 0; i<e.length;i++){
  d[e[i]] = b[i];
}
//console.log(operator)
var operand1 = c.split(operator)[0];
var operand2 = c.split(operator)[1];
var value1 = '';
var value2 = '';
for(i = 0; i < operand1.length; i++){
  value1 += d[operand1[i]];
}
for(i = 0; i<operand2.length; i++){
  value2 += d[operand2[i]];
}

var finalString = parseInt(value1) + operator + parseInt(value2);
console.log(eval(finalString))
//output should be -413289827
