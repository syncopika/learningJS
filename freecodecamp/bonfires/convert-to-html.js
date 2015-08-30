//convert characters to html entities 
//another good use of the switch/case statements! (i think)

function convert(str) {
  var arr = str.split('');
  for(i=0;i<arr.length;i++){
  switch(arr[i]){
    case '&':
      arr[i] = '&amp;';
      break;
    case '<':
      arr[i] = '&lt;';
      break;
    case '>':
      arr[i] = '&gt;';
      break;
    case '"':
      arr[i] = '&quot;';
      break;
    case "'":
      arr[i] = '&apos;';
      break;
  }
  }
  return arr.reduce(function(a,b){return a.concat(b)});
}

convert('Dolce & Gabbana');
