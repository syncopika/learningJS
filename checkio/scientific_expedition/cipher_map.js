function rotate(array){
  var newArr = [];
  var list = {'str1': "", 'str2': "", 'str3': "", 'str4': ""};
  
  for(var i = 3; i >= 0; i--){
    for(var j = 3; j >= 0; j--){
      if(i === 3){
        list['str1'] += array[j][i];
      }else if (i === 2){
        list['str2'] += array[j][i];
      }else if(i === 1){
        list['str3'] += array[j][i];
      }else if(i === 0){
        list['str4'] += array[j][i];
      }
    }
  }
  
  for(var str in list){
    newArr.push(list[str]);
  }
  return newArr.reverse();
}


function recallPassword(grille, password){
    var str = "";
    for(var i = 0; i < 4; i++){
        
        for(var j = 0; j < grille.length; j++){
            for(var k = 0; k < grille[j].length; k++){
                if(grille[j][k] === 'X'){
                    str += password[j][k];
                }
            }
        }
        
        grille = rotate(grille);
    }
    return str; 
}
