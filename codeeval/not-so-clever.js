var a =   '5 4 3 2 1 | 7'
a = a.split(' | ')
var b = a[0].split(' ').map(function(a){return parseInt(a)})
var limit = parseInt(a[1]);
var limitCounter = 0;

//this while loop ensures that each iteration of the array 'b' will start at zero
//the break in the if-block stops the for-loop if it finds two numbers to swap

while(limitCounter < limit){

for(i=0;i<b.length-1;i++){
       if(b[i] > b[i+1]){
         var left = b[i];
         var right = b[i+1];
         b[i] = right;
         b[i+1] = left;
       	 limitCounter++;
         break;
       }else if(b[i+1] == undefined){
         limitCounter++;
       }
  }
  //console.log(b);
}

var ans = '';
b.map(function(a){ans += a + ' '})
console.log(ans.trim())
