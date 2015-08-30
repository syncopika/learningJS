//look through an array (first argument) and return the first element in the array that passes a truth test (second argument)

function find(arr, func) {
  var num = 0;
  if(!arr.some(func)){      //use some() method here to apply the func (2nd argument) and check if anything in the array fits func
    return undefined;
  }
  else{
    for(i=0;i<arr.length;i++){
      if(arr[i]%2===0){
        return arr[i];
      }
    }
  }
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
