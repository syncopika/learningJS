//example input string
var a  = 'John Tom Mary | 5'

//do some modifications
var b = a.split('|')[0].trim().split(' ');
var b1 = b.length;
var c = parseInt(a.split('|')[1]);

//'line' will be an array...
function black(line){
//every iteration needs new arrays
var d = [];
var e = [];
  
//go through all the people depending on value of c
//and make a new array. the length of the array should be equal to c.
for(i=0;i<c;i++){
  if(line[i] === undefined){
    line[i] = line[i-b1];
    d.push(line[i]);
  }
  else{
  d.push(line[i]);
  }
}

//make a new array without the eliminated person  
for(i=0;i<d.length;i++){
  if(d[i] !== d[d.length-1] && e.indexOf(d[i]) < 0){
    e.push(d[i]);
    line = e;
  }
}

//at some point the length of line should be 1...
if(line.length === 1){
  console.log(line.toString());
}
else{
  //edit b1 so that it reflects the number of people after elimination
  b1 = b1-1;
  black(line);
}  
}

black(b)
