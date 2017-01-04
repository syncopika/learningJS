function brokenClock(start, wrong, offset){
  
  //steps:
  //find time difference (in seconds)
  //get relationship between offset
  //divide time difference by relationship constant
  //the result is the new time in seconds
  //add to start time
  
  start = start.split(':').map(function(a){ return parseInt(a) });
  wrong = wrong.split(':').map(function(a){ return parseInt(a) });
  
  var startTime = start[0]*3600 + start[1]*60 + start[2];
  var endTime = wrong[0]*3600 + wrong[1]*60 + wrong[2];
 
  var timeDiff = endTime - startTime;
  
  //now find relationship in the offset
  //i.e. +1 sec per 1 min = +1 sec per 60 sec
  //think: y = mx + b and find m. 
  //I think 4 data points may be good enough
  
  var offsetTime = offset.split("at");
  
  for(var i = 0; i < 2; i++){
    if(offsetTime[i].indexOf('hour') > -1){
      offsetTime[i] = parseInt(offsetTime[i])*3600;
    }else if(offsetTime[i].indexOf('minute') > -1){
      offsetTime[i] = parseInt(offsetTime[i])*60;
    }else{
      offsetTime[i] = parseInt(offsetTime[i]);
    }
  }
  
  //pre-initialize 
  var x = offsetTime[1];
  var y = offsetTime[1] + offsetTime[0];
  for(var j = offsetTime[1]; j < offsetTime[1]*5; j += offsetTime[1]){
    x　+=　offsetTime[1];
    y　+=　(offsetTime[1] + offsetTime[0]);
  }
  
  //find the slope for the data
  var m = y / x;

  //now take timeDiff and divide it by 'm'
  var newTime = timeDiff / m;

  //newTime is total time in seconds. divide that by 3600 to get the hours
  //(floor it), and add that to the start hours. then subtract from newTime
  //to get the minutes and seconds.
  var newHours = Math.floor(newTime / 3600);
  var newMin = Math.floor((newTime - (newHours*3600)) / 60);
  var newSec = Math.floor(newTime - (newHours*3600) - (newMin*60));
 
  //add answer to start time
  newHours += start[0]; 
  newMin += start[1];
  newSec += start[2];
 
  //account for spillover from minutes and seconds
  if(newSec > 60){
    newMin += Math.floor(newSec / 60);
    newSec = newSec - Math.floor(newSec / 60)*60;
  }
  
  if(newMin > 60){
    newHours += Math.floor(newMin / 60);
    newMin = newMin - Math.floor(newMin / 60)*60;
  }
  
  if(newHours > 24){
    newHours = newHours % 24;
  }
  
  //add padding if necessary
  if(newHours < 10){
    newHours = "0" + newHours;
  }
  if(newMin < 10){
    newMin = '0' + newMin;
  }
  if(newSec < 10){
    newSec = '0' + newSec;
  }
  
  return newHours + ":" + newMin + ":" + newSec;
}
