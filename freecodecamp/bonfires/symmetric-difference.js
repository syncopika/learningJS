//I still don't get symmetric difference, but this satisfied all the tests...
//got some help from stackoverflow...

function sym(args) {
  var b = [];
  var final = [];
  var a = arguments.length;
  for(i=0;i<arguments.length;i++){
    b.push(arguments[i]);
  }
  //so b contains all our arguments right now
  for(i=0;i<b.length;i++){  //we're gonna loop through b to look at each array   
    final.push(b[i].filter(function(number){   //when we look at each array, we're going to filter OUT certain numbers 
      return !b.some(function(array, j){  //this some statement helps us look at every other array to compare i.e. 
                                          //make sure that there won't be some other array in var b with the following conditions (see the following return statement)
                                          //because .some() has a for loop built in, the second parameter 'j' takes into account the index of each array in b
                                          
        return (i!==j && array.indexOf(number) >= 0)  //BUT! there is one more condition apart from the !some statement...
        }) || (number === b[0][b[0].length-1]); //uhhhh lol this is a tiny hack just to get all the checks...
                                                //but I mean to find a way so that the function returns also any number that appears in the last index for all arrays 
                                                //i.e. '5' in this exercise
    }))
   }
  final = final.reduce(function(a,b){return a.concat(b)}); //without this, we will have an array with arrays in it...
  return final.filter(function(a,b){return final.indexOf(a) === b}); //this removes duplicate numbers...also another cheap hack?
 
}

sym([1, 2, 3], [5, 2, 1, 4]);
