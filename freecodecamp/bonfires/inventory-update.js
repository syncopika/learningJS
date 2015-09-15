// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];


//It's necessary to modify the array, not make a new one!!
function inventory(arr1, arr2) {

var list = {}; //hold all the things in the first array
var list2 = {}; //hold all the things in the second array
var list3 = {}; //hold all items that both the first and second array have, including new items

//fill up first list
 for(i=0;i<arr1.length;i++){
    list[arr1[i][1]] = arr1[i][0];
   list3[arr1[i][1]] = arr1[i][0];
  };

//fill up second list
 for(i=0;i<arr2.length;i++){
    list2[arr2[i][1]] = arr2[i][0];
  }

//fill up list3
    for(property in list3){
       for(i=0;i<arr2.length;i++){
      if(property === arr2[i][1]){
        list3[property] += arr2[i][0];
      }
      if(list3[arr2[i][1]] === undefined){
         list3[arr2[i][1]] = arr2[i][0];
      }   
    }
   }

//this adds the current values (i.e. arr1[0][0]) for each item in arr1 (so that we aren't using a new array)
for(i=0;i<arr1.length;i++){
  for(property in list3){
    if(property = arr1[i][1]){
      arr1[i][0] = list3[property];   //list 3 has the updated info for the inventory, so we'll that data
    }
  }
}

//at this point, if you console.log(arr1), the numbers for each item should have been updated to reflect the additions from 
//the second array. however, the new items haven't been added yet!
  
//here I add to the first array any new items that are only in the second array.
//this is where having the list of the first array is helpful
  for(i=0;i<arr2.length;i++){
    if(list[arr2[i][1]] === undefined){
      arr1.push(arr2[i]);
    }
  }
 return arr1.sort(function(a,b){return a[1] > b[1]}); //this places everything in alphabetical order!
}

inventory(curInv, newInv);
