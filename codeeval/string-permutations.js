//did not submit yet. works ok for 3 character strings?? need to solve for longer strings though...

var line = 'abc' //try 'abcd'
var lineArray = line.split('');
var words =[];
for(i=0;i<lineArray.length;i++){
  //create new segment excluding line[i]
  lineArray[i] = '$' //substitute line[i] with a placeholder character
  var newSeg = [];
  for(j=0;j<lineArray.length;j++){
    if(lineArray[j] !== '$'){
      newSeg.push(lineArray[j]);
    }
  }
  
  //newSeg should have all the letters/nums excluding line[i]
  //do the sorting thing now
  for(k=0;k<newSeg.length;k++){
      var temp = newSeg[l];
      newSeg[l] = newSeg[l+1];
      newSeg[l+1] = temp;

    //console.log(newSeg)
    newSeg2 = newSeg;
   
    newSeg1 = newSeg.join('');
    var newWord = line[i] += newSeg1;
      words.push(newWord);
    //now reverse segments and attach to line[i]
    var rev = newSeg2.reverse();
    rev = rev.join('');
    var newWord2 = line[i] += rev;
    words.push(newWord2);
    }
  
  //reset lineArray (otherwise the '$' will accumulate)
  lineArray = line.split('')
  //console.log('----')
}
//console.log(words)
var list = [];    
for(i=0;i<words.length;i++){
      if(list.indexOf(words[i]) < 0){
        list.push(words[i]);
      }
}
console.log(list.sort())
    
  
