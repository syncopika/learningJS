//reduce contents of an array

function steamroller(arr) {
  for(i=0;i<arr.length;i++){
    console.log(arr[i]);
    if(typeof arr[i] !== 'object'){
      arr[i] = [arr[i]];
    }
    for(j=0;j<arr[i].length;j++){
      if(typeof arr[i][j] === 'object'){
  arr[i][j] = arr[i][j].reduce(function(a,b){return a.concat(b);});
        arr[i][j] = arr[i][j][0];
      }
  }
  }
  return arr.reduce(function(a,b){return a.concat(b);});
}

steamroller([1, [2], [3, [[4]]]]);
