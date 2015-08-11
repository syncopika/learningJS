//break up an array according to given size

function chunk(arr, size) {            
  var c = arr;                         
  var b = [];
  for (i=0;i<arr.length/size;i++){  //notice that the limit of "i" is length of the array divided by size
    var a = [];                     //in this example, 6/2 = 3 -> so three new arrays each with length of 2 are produced.
    for (j=0;j<size;j++){           //the first for loop determines how many new arrays to produce 
      if(c[j] === undefined){       //the second loop fills up each new array depending on size (with 2 numbers each in this example)
        break;}                     
      else{
      a.push(c[j]);
      }
    }
    c = c.slice(size, arr.length); //this is how we go from 0 to the last index in the given array
    b.push(a);                     //each time we loop, we will cut out the elements in the given array that we just pushed
}                                 //thus, every time variable c enters the array, it's a smaller array than what we started with.
  return b;     //b is the "mother" array I guess you can say; it will hold each of the arrays produced by the loop.
}


chunk([0, 1, 2, 3, 4, 5], 2);
