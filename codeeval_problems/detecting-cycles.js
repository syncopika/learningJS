//partial solution -_-

var a  ='3 4 8 0 11 9 7 2 5 6 10 1 49 49 49 49' //example string. var a should = line
a = a.split(' ');
var table = {};
var table2 = {};
var cycle = '';
//do a tally of every unique number in the string
for(i=0;i<a.length;i++){
  if(table[a[i]] === undefined){
    table[a[i]] = 0;
  }
  else{
    table[a[i]] += 1;
  }
}
//for the cyclic numbers (which are > 0), arrange them in the order they are seen in the string 
//do this by making the value in table2 the index of the cyclic number, and the property be the cyclic number
for(property in table){
  if(table[property] > 0){
    table2[a.indexOf(property)] = property;
  }
}
//
for(property in table2){
  cycle += table2[property];
}

console.log(table) //not needed
console.log(table2) //not needed
console.log(cycle)

//092715 10:16 pm est BOOM WIN!
var a = line;
a = a.split(' ');
var table = {};
var table2 = {};
var cycle = '';

for(i=0;i<a.length;i++){
  if(table[a[i]] === undefined){
    table[a[i]] = 0;
  }
  else{
    table[a[i]] += 1;
  }
}

for(property in table){
  if(table[property] > 0){
    table2[a.indexOf(property)] = property;
  }
}

for(property in table2){
  cycle += table2[property] + ' '; //space here is important!
}

console.log(cycle.trim()) //trim trailing whitespace!
