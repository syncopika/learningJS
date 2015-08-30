//where art thou   

function where(collection, source) {
  var arr = [];
  for (i=0;i<collection.length;i++){ //go through each index in the array 
    for (property in collection[i]){    //each index happens to be an object, so for each property in each index...
      if(source[property] === collection[i][property]){  //if the value of property in source is the same as
        arr.push(collection[i]);                        //one in one of the properties of the objects
      }                                                 //give me the object
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
