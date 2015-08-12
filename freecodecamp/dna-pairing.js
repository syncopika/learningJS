//give the correct opposing string given a DNA fragment
//switch-case would work well here!

function pair(str) {
 var arr = str.split('');
  var newArr = [];
  for (i=0;i<arr.length;i++){
    newArr.push(arr[i].split(''));
  }
  for (i=0;i<newArr.length;i++){
    switch(newArr[i][0]){
      case 'A':
        newArr[i].push('T');
        break;
      case 'T':
        newArr[i].push('A');
        break;
      case 'C':
        newArr[i].push('G');
        break;
      case 'G':
        newArr[i].push('C');
    }
  }
 return newArr;
}

pair("GCG");
