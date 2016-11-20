//merge sort 

//merge helper method
//a, b are SORTED arrays
function merge(a, b){

	var newArr = [];	
	var aMarker = 0;
	var bMarker = 0;
	
	//put the elements in order into the new array
	//this is limited to the number of elements in the shortest array
	while(aMarker < a.length && bMarker < b.length){
			if(a[aMarker] <= b[bMarker]){
				newArr.push(a[aMarker++]);
			}else{
				newArr.push(b[bMarker++]);
			}
	}
	
	//now for the larger array, put the rest of the elements in the new array
	if(aMarker < a.length){
		for(var i = aMarker; i < a.length; i++){
			newArr.push(a[i]);
		}
	}else{
		for(var j = bMarker; j < b.length; j++){
			newArr.push(b[j]);
		}
	}
	console.log(newArr); //show what each merge step looks like
	return newArr;
}


//here is the merge sorting function
function mergeSort(array){
	
	//base case!
	if(array.length === 1){
		return array;
	}
	
	//split array
	var left = array.slice(0, Math.floor(array.length/2));
	var right = array.slice(Math.floor(array.length/2), array.length);
	
	//then for each half keep splitting them until they're of length 1,
	//which then allows the "merge" method to be called on 
	return merge(mergeSort(left), mergeSort(right));
}


//test
var arr1 = [6,3,4,8,9,3,2,1];

console.log(mergeSort(arr1));
//should print: [1,2,3,3,4,6,8,9]











