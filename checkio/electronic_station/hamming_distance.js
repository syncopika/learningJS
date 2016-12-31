//get binary representation of a number
function getBin(num){
  var str = [];
  var rem = num % 2;
  var rest = Math.floor(num / 2);
  
  str.push(rem);
  
  while(rest !== 0){
    rem = rest % 2;
    str.push(rem);
    rest = Math.floor(rest / 2);
  }
  
  return str.reverse()
      		.map(function(a){ return "" + a})
     		  .reduce(function(a,b){return a.concat(b)});
}

function hammingDistance(n, m){
    var a = getBin(n);
    var b = getBin(m);
    
    //make the shorter string so it's equal length with the longer one
    var s = "";
    if(a.length > b.length){
        for(var i = 0; i < a.length - b.length; i++){
            s += "0";
        }
        b = s + b;
    }else{
        for(var i = 0; i < b.length - a.length; i++){
            s += "0";
        }
        a = s + a;
    }
    
    //now compare the two
    var diff = 0;
    for(var j = 0; j < a.length; j++){
        if(a[j] !== b[j]){
            diff++;
        }
    }
    return diff;    
}
