function friendly(str) {
  var newArr = [];
  var a1 = str[0].split('-');//this is the first date
  var a2 = str[1].split('-');//this is the second date
  //a1 is an array
  //a1[0] should equal the year only
  //a1[1] is the month
  //a1[2] is the day
  
  function getMonth(number){
    var n = parseInt(number);
    switch(n){
      case 1:
        return 'January';
        break;
      case 2:
        return 'February';
        break;
      case 3:
        return 'March';
        break;
      case 4:
        return 'April';
        break;
      case 5:
        return 'May';
        break;
      case 6: 
        return 'June';
        break;
      case 7:
        return 'July';
        break;
      case 8:
        return 'August';
        break;
      case 9:
        return 'September';
        break;
      case 10:
        return 'October';
        break;
      case 11:
        return 'November';
        break;
      case 12:
        return 'December';
        break;
      default:
        return 'unknown';
    }
  }
  
  function getEnding(number){
    var n = parseInt(number);
    var n2 = n[1]; //if number is two digits, focus only on the 2nd number
  
    if(n===1 || n2===1){
      return 'st';
    }
    else if(n===2 || n2===2){
      return 'nd';
    }
    else if(n===3 || n2===3){
      return 'rd';
    }
    else if(4<n<20){
      return 'th';
    } 
    else if(4<n2<9){
      return 'th';
    }
  }
  
  if (str[0] === str[1]){
    newArr.push(getMonth(a1[1]) + ' ' + parseInt(a1[2]) + getEnding(a1[2]) + ', ' + a1[0]);
  }
  else if((a1[0] === a2[0]) && (a1[1] === a2[1]) && (a1[2] !== a2[2])){ //only the year and month are the same
    newArr.push(getMonth(a1[1]) + ' ' + Math.min(a1[2],a2[2]) + getEnding(a1[2]));
    newArr.push(Math.max(a1[2],a2[2]) + getEnding(a2[2]));
  }
  else if((a1[0] === a2[0]) && (a1[1] !== a2[1])){ //only the year matches
    newArr.push(getMonth(a1[1]) + ' ' + Math.min(a1[2],a2[2]) + getEnding(a1[2]));
    newArr.push(getMonth(a2[1]) + ' ' + Math.max(a1[2],a2[2]) + getEnding(a2[2]))
  }
  else if(parseInt(a2[0]) === parseInt(a1[0]) + 1){ //if consecutive years
   if(parseInt(a1[2]) > parseInt(a2[2])){
   newArr.push(getMonth(a1[1]) + ' ' + Math.max(a1[2],a2[2]) + getEnding(a1[2]) + ', ' + a1[0]);
   newArr.push(getMonth(a2[1]) + ' ' + Math.min(a1[2],a2[2]) + getEnding(a2[2]) + ', ' + a2[0]);
   }
   else{
    newArr.push(getMonth(a1[1]) + ' ' + Math.min(a1[2],a2[2]) + getEnding(a1[2]));
   newArr.push(getMonth(a2[1]) + ' ' + Math.max(a1[2],a2[2]) + getEnding(a2[2]));     
   } 
   }
  else{
    newArr.push(getMonth(a1[1]) + ' ' + parseInt(a1[2]) + getEnding(a1[2]) + ', ' + a1[0]);
    newArr.push(getMonth(a2[1]) + ' ' + parseInt(a2[2]) + getEnding(a2[2]) + ', ' + a2[0]);
  }
 
  return newArr;

}

friendly(['2015-07-01', '2015-07-04']);
