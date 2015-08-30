//sum all odd fibonacci numbers

function sumFibs(num) {
  var arr = [1];  
  var a = 0, b = 1, f = 1;
    for(var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
      if (f%2 !== 0){
        arr.push(f);
      }
    }
   
  var newArr = [];
   
  for(i=0;i<arr.length;i++){
    if(arr[i] <= num){
      newArr.push(arr[i]);
    }
  }
  return newArr.reduce(function(a,b){return a+b;});
}
sumFibs(4);
