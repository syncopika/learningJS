
// kadane algorithm, including negative numbers
// cmsc351

function maxSum(arr){

	var oldM;
	var s = arr[0];
	var m = arr[0];
	var start = 0;
	var end = 0;

	for(var i = 1; i < arr.length; i++){
	
		s = Math.max(arr[i], (arr[i] + s));
		
		oldM = m;
		
		m = Math.max(m, s);
		
		// if the new max is the current element AND the old maximum is not the same as the new max,
		// then change the start and end indices. 
		if(s === arr[i] && oldM !== m){
			start = i;
			end = i;
		}
		
		if(oldM < m){
			end = i;
		}
	}
	
	// empty set can be be represented as start: -1, end: -1
	// thus the sum will be 0
	if(m < 0){
		start = -1;
		end = -1;
		m = 0;
	}

	return {'start': start, 'end': end, 'sum': m};
}

// test
console.log(maxSum([-7,-5,-1,-3,-8]));
console.log(maxSum([-7,-5,-10,-3,-2]));
console.log(maxSum([1,2,-6,10,4,-5]));
console.log(maxSum([1,2,6,10,4,-5]));
console.log(maxSum([1,2,6,-10,-4,-5]));
console.log(maxSum([-10,1,20,-6,100,-4,-5]));
