/*
Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. 
If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!
*/

function pairwise(arr, arg) {
  var arr2 = arr;
  var newArr=[0];
  for(i=0;i<arr.length;i++){     //two for loops makes us go through the array, but lets us evaluate EACH element in the array against EVERY element in the array
     for(j=1;j<arr2.length;j++){

       var a = arr[i]+arr2[j]; //add up each element with every element in the array 

       if(a === arg){    //now we test each sum. if they equal, we want to push both of the numbers' indices into a new array
         
         newArr.push(i);
         arr[i]=undefined; //after we push the index of the number, we make the value undefined so that it is not used again when evaluating.
         newArr.push(j);   
         arr[j]=undefined;
       }
       
       }
  
  }
      for(i=0;i<newArr.length;i++){   //if sums with the same number , i.e. 2+2, 3+3, appear, we want to remove those since they don't count.
         if(newArr[i] === newArr[i+1]){
           newArr[i] = 0;
           newArr[i+1] = 0;
         }
  }
  return newArr.reduce(function(a,b){return a+b;});  //now we add up all the contents of the newArray
}

pairwise([1,4,2,3,0,5], 7);
