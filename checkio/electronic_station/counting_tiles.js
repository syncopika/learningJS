function checkTile(x, y, gridLength, radius){
  var a = x - gridLength;
  var b = y - gridLength;
  
  var bottomL = (a+1)*(a+1) + b*b <= radius*radius;
  var bottomR = (a+1)*(a+1) + (b+1)*(b+1) <= radius*radius;
  var topR = (a*a)+ (b+1)*(b+1) <= radius*radius;
  var currVertex = (a*a) + (b*b) <= radius*radius;
  
  if(bottomL && bottomR && topR && currVertex){
    return "solid";
  }else if(bottomL || bottomR || topR || currVertex){
    return "partial";
  }
  return null;
}


function countingTiles(radius){
    
    var gridLength = Math.ceil(radius)*2;
    var center = Math.ceil(radius);
    var partial = 0;
    var solid = 0;
    
    for(var i = 0; i < gridLength; i++){
        for(var j = 0; j < gridLength; j++){
            if(checkTile(i, j, center, radius) === "partial"){
                partial++;
            }else if(checkTile(i, j, center, radius) === "solid"){
                solid++;
            }
        }
    }
    return [solid, partial];
}
