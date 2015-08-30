//find orbital period of various satellites

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(i=0;i<arr.length;i++){
  var a = arr[i].avgAlt;  //var a holds the value of the property avgAlt of the object in the given array (there might be more than one object though, hence the for loop)
  var b = earthRadius + a;  
  var t = 2*Math.PI*Math.sqrt(((Math.pow(b,3))/GM));  //this is the formula for calculating orbital period
  delete arr[i].avgAlt;  //delete the property avgAlt from the object (now there should only be {name: 'sputnik'})
  arr[i].orbitalPeriod = Math.round(t); //now we add in the new property, orbitalPeriod, as well as its value.
  }
  return arr;
}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
