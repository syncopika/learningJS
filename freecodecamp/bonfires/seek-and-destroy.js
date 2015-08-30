//based on the arguments following the array, remove those arguments (seen as numbers) from the array

function destroyer(arr) {
  var list = [];    
  var list2 = {};  //this one is an object
  for (property in arguments){   
    list.push(arguments[property]);     //get all the arguments in an array so they're easy to manipulate
  }   
  var a = arguments[0];           //I know the first argument is an array, so I will isolate it here
  console.log(a);             //this is just for me to check that variable a is what I think it should be        
  list = list.splice(1,list.length);      //cut out the array from the "list" I made above
  for (i=0;i<list.length;i++){            //now for the remaining arguments that came after the array
    list2[list[i]] = list[i];             //put them into the object, list2, and set their values equal to the property
  }                                       //since they're numbers, it should just be like "1:1,2:2"
  console.log(list2)      //just to check
  return a.filter(function(value){      //coming back to the array I isolated, I want to remove the values that
    return !(value in list2);           //appear in both the object (list2) and the array.
    });                                 //interestingly, I can use "(property in object)" without "for" in this case.
 }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
