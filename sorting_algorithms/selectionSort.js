//selection sort

function selectionSort(data){

	for(var i = 0; i < data.length - 1; i++){
		
		//set up a variable to hold the index of the smaller
		//element if there is one
		var minIndex = i;
		
		//look at the rest of the elements 
		//and see if there's a smaller one
		//we want to find the SMALLEST element, so when
		//we check each time, the check is updated to compare with
		//the newest smaller element found
		for(var j = i + 1; j < data.length; j++){
			if(data[j] < data[minIndex]){
				minIndex = j;
			}
		}
		
		//by now, the index of the smallest element after the current element
		//should be obtained
		//so do the swap
		var temp = data[minIndex];
		data[minIndex] = data[i];
		data[i] = temp;
	}

	return data;
}


//testing

var a = [7,4,6,9,2,3,1];

console.log(selectionSort(a));
