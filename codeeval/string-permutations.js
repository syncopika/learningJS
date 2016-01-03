//did not submit yet. works ok for 3 character strings?? need to solve for longer strings though...

var line = 'abc' //try 'abcd'
var lineArray = line.split('');
var words =[];
for(i=0;i<lineArray.length;i++){
  //create new segment excluding line[i]
  lineArray[i] = '$' //substitute line[i] with a placeholder character
  var newSeg = '';
  for(j=0;j<lineArray.length;j++){
    if(lineArray[j] !== '$'){
      newSeg += lineArray[j];
    }
  }
  //console.log(newSeg)
  //newSeg should have all the letters/nums excluding line[i]
  //do the sorting thing now

  //the sort is not working :<
  for(k=0;k<newSeg.length;k++){
    var newWord = '';
    for(l=0;l<newSeg.length;l++){
      if(newSeg[l] < newSeg[k]){
      var temp = newSeg[k];
      newSeg[k] = newSeg[l];
      newSeg[l] = temp;
      }
    }
    console.log(newSeg)
    newWord += line[i] + newSeg;
    words.push(newWord);
 
    //now reverse segments and attach to line[i]
    var newWord2 = line[i];
    var rev = newSeg.split('');
    rev = rev.reverse();
    rev.map(function(a){return newWord2 += a});
    words.push(newWord2);
  }
  //reset lineArray (otherwise the '$' will accumulate)
  lineArray = line.split('')
  console.log('----')
}
console.log(words)
var list = [];    
for(i=0;i<words.length;i++){
      if(list.indexOf(words[i]) < 0){
        list.push(words[i]);
      }
}
console.log(list)

    
  
