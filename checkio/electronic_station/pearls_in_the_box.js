function helperFunc(set, N, previousP){
  
  var matchW = new RegExp("w", 'g');
  var matchB = new RegExp("b", 'g');
  
  //base case
  if(N === 0 || previousP === 0){

    var white = (set.match(matchW) === null) ? 0 : set.match(matchW).length ;
    
    //get probability of white for the last turn
    //and multiply it with the probability for getting this current set
    var whiteP = white / set.length; 
    previousP *= whiteP;
    
    //since we care only about the white pearls,
    //ignore any sets that have all black
    if(set.match(matchW) !== null){
      return previousP;
    }
    return 0;
  }
  
  //find out probabilities for each color
  var white = (set.match(matchW) === null) ? 0 : set.match(matchW).length;
  var black = (set.match(matchB) === null) ? 0 : set.match(matchB).length;
  
  var whiteP = white / set.length; //get probability of white
  var blackP = black / set.length; //get probability of black
  
  var newSetW = set.replace("w","b"); //replace white with black once
  var newSetB = set.replace("b","w"); //replace black with white once
  
  //recursion
  return helperFunc(newSetW, N-1, previousP*whiteP) + 
          helperFunc(newSetB, N-1, previousP*blackP);
}


function boxProbability(marbles, step) {
    var prob = Math.round(helperFunc(marbles, (step-1), 1)*100) / 100;
    return prob;
}
