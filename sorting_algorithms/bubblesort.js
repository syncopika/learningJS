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

//I'm not sure if this is actually considered bubble sort since every data element
//is being checked against every other element, making it feel like the absolute worst
//possible way to sort something lol. but I think I read it somewhere and it's the
//first sorting method I ever saw. somehow this works.
function bubble(data){	
	for(var i = 0 ; i < data.length; i++){
		for(var j = 0; j < data.length; j++){
			if(data[i] < data[j]){
				var temp = data[j];
				data[j] = data[i];
				data[i] = temp;
			}
		}
	}
	return data;
}

//test
console.log(bubbleSort([4,7,6,8,9,2,1,43]))
