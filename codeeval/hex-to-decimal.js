//only 75% what!??
//you forgot about '0' being a possible number in var a -_-

var a = '6f' //line
var b = [];
var hexLetters = {'a':10, 'b':11, 'c':12, 'd':13, 'e':14, 'f':15};
a = a.split('').reverse();
for(i=0;i<a.length;i++){
     //if a[i] is NOT a number but a letter
     if(!parseInt(a[i]) > 0){
       var total = Math.pow(16,i)*hexLetters[a[i]];
       b.push(total);
     }
     else{
       var total = Math.pow(16,i)*a[i];
       b.push(total);
     }
}
console.log(b.reduce(function(a,b){return a+b})) 

//refined
var a = '9f'
var b = [];
var hexLetters = {'a':10, 'b':11, 'c':12, 'd':13, 'e':14, 'f':15};
a = a.split('').reverse();
console.log('f' >= 0)
for(i=0;i<a.length;i++){
     //if a[i] is NOT a number but a letter
     //also account for 0 being a possible number!
     if(!(a[i] >= 0)){
       var total = Math.pow(16,i)*hexLetters[a[i]];
       b.push(total);
     }
     else{
       var total = Math.pow(16,i)*a[i];
       b.push(total);
     }
}
console.log(b.reduce(function(a,b){return a+b})) 
