//quick sort 

function quickSort(data){
	quickSortHelper(data, 0, data.length);
	return data;
}


//helper method 
function quickSortHelper(data, start, end){

	//base case
	if(start >= end || end <= start){
		return;
	}

	//set the pivot
	var pivot = data[start];
	
	//set up index of pivot
	var pivotIndex = start;
	
	//partitioning step (get elements < pivot on left, > pivot on right, pivot in middle)
	for(var i = start + 1; i < end; i++){
		if(data[i] < pivot){
			pivotIndex++;
			
			//swap
			var temp = data[pivotIndex];
			data[pivotIndex] = data[i];
			data[i] = temp;
		}
	}
	//now put pivot in right place
	var temp = data[pivotIndex];
	data[pivotIndex] = data[start];
	data[start] = temp;
	
	//now do the same function for the left and right side of the now-modified data set
	quickSortHelper(data, start, pivotIndex - 1);
	quickSortHelper(data, pivotIndex + 1, end);
}

//testing
var a = [4,7,5,9,2,3,6,1];
console.log(quickSort(a));

var b = [4,7,5,9,2,3,6,2];
console.log(quickSort(b));
