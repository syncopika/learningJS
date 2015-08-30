//factorialize a number

function factorialize(num) {   
  var total = 1;    
  for(i=num;i>0;i--){     //multiply next number backwards from "num"
   total = i* total
 }
  return total;
}
factorialize(5);

//PROTIP - recursion is great here!

function factorialze(num){
 if(num == 0){
 return 1;
 }
 else{
 return num * factorialize(num-1);
 }
 }
