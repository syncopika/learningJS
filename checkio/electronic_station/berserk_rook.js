function getGrid(){
     var grid  = [];
    for(var i = 8; i > 0; i--){
      var row = [];
      for(var j = 97; j < 105; j++){
        row.push(String.fromCharCode(j) + i);
      }
      grid.push(row);
    }
  return grid;
}

function berserkRook(start, array) {
  
  //find enemies closest to start
  //so check row and column
  var grid = getGrid();
  var startRow = 8 - parseInt(start[1]);
 
  var startCol = grid[startRow].indexOf(start); 
  
  var inRow = [];
  var inCol = [];
  
  //get first one on left
  for(var i = startCol; i >= 0; i--){
      if(array.includes(grid[startRow][i])){
       //we've found an enemy rook to attack
      //push coordinates of that enemy -> [row, col] 
      inRow.push(grid[startRow][i]);
      break;
    }
  }
  
  //get first one on right
  for(var i = startCol; i < grid[0].length; i++){
    if(array.includes(grid[startRow][i])){
      inRow.push(grid[startRow][i]);
      break;
    }
  }

  //but what if the closest enemy is in the col, and not row?
  //this looks up the column
  for(var j = startRow; j >= 0; j--){
    if(array.includes(grid[j][startCol])){
      //we've found an enemy
      inCol.push(grid[j][startCol]);
      break;
    }
  }
  
  //this looks down the column
  for(var k = startRow; k < grid.length; k++){
    if(array.includes(grid[k][startCol])){
      //we've found an enemy
      inCol.push(grid[k][startCol]);
      break;
    }
  }
 
  var targets = inRow.concat(inCol);
    
  //base case
  if(targets.length === 0){
    return 0;
  }
  
  var enemyRooks = 0;
  
  for(var l = 0; l < targets.length; l++){
    //edit array so that enemy rook being looked at is removed
    var tempArr = array.slice();
    tempArr[array.indexOf(targets[l])] = 0;
    enemyRooks = Math.max(enemyRooks, 1 + berserkRook(targets[l], tempArr));
  }
  
  return enemyRooks;
}
