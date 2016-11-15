function bubbleSort(data){
  
  //data.length - 1 because need to
  //look at the next neighbor of data[j]
  var endpoint = data.length - 1;
 
  for(var i = 0; i < data.length; i++){ 
    
    var isSorted = true;
    var lastSwapIndex = 0;
    
    for(var j = 0; j < endpoint; j++){
      //do the swap
      if(data[j+1] < data[j]){
        var temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp; 
        
        //update 
        lastSwapIndex = j;
        isSorted = false;
      }
    }
    
    if(isSorted){
      break;
    }
    endpoint = lastSwapIndex;
  } 
 return data;
}

//test
console.log(bubbleSort([4,7,6,8,9,2,1,43]))
