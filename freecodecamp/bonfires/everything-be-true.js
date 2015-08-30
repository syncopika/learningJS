//Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument)
//NOTE! this problem is tricky. you could get away with just using the bottom for loop because of the lack of sufficient tests
//for example, if you made the 2nd argument ('pre') to be {'sex':'female'} and changed the 'sex' values in the 1st argument ('collection')
//so that some said 'female' and some said 'male', it would still return true because, if just using the bottom for loop alone, would 
//only check for property and not both property and value. so a better, more accurate program would be to check both property and value. 


function every(collection, pre) {
  if(typeof pre === 'object'){
    for (property in pre){
      var pre2 = property;
      pre = pre[property];
    }
  
    for(i=0;i<collection.length;i++){
        if(collection[i][pre2] === pre){
          return true;
        }
        else{return false;}
      }
    }
  
  else{
  for(i=0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre) === true){
      return true;
    }
    else{return false;}
    }
  }
  }

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
