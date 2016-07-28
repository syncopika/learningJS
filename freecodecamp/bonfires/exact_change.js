//sorta works?? 

//checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) 
//should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
//but this program returns:
//["TWENTY", 60],["TEN", 20],["FIVE", 15],["ONE", 1],["QUARTER", 0.5],["DIME", 0.2],["PENNY", 0.03]
//close!

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var change2 = [];
  var cidTotal = cid.reduce(function(a, b){return a + b[1];},0);
  // Here is your change, ma'am.
  if(cidTotal === change){
    return "Closed";
  }else if(cidTotal < change){
    return "Insufficient Funds";
  }else{
    var count = change;
  
      //loop through cid backwards
      for(i = cid.length-1; i >= 0; i--){
       
        if(count === 0){
          return change2;
        }
        
       if(cid[i][0] === "ONE HUNDRED" && cid[i][1] >= 100){
         if(change >= 100){
           var hundreds = Math.floor(change/100);
           count = change%100;
           change2.push(["HUNDREDS", (hundreds*100)]);
         }
       }
        
        if(cid[i][0] === "TWENTY" && count >= 20){
           var twenty = Math.floor(count/20);
           twenty = twenty > (cid[i][1]/20) ?  cid[i][1]/20 : twenty;
           count = count - twenty*20;
           change2.push(["TWENTY", (twenty*20)]);
         }
       
    
        if(cid[i][0] === "TEN" && count >= 10){
           var ten = Math.floor(count/10);
           ten = ten > (cid[i][1]/10) ?  cid[i][1]/10 : ten;
           count = count - ten*10;
           change2.push(["TEN", (ten*10)]);
         }
       
          if(cid[i][0] === "FIVE" && count >= 5){
           var five = Math.floor(count/5);
           five = five > (cid[i][1]/5) ?  cid[i][1]/5 : five;
           count = count - 5*five;
           change2.push(["FIVE", (five*5)]);
         }
        
         if(cid[i][0] === "ONE" && count >= 1){
           var one = Math.floor(count/1);
           one = one > (cid[i][1]/1) ?  cid[i][1]/20 : one;
           count = count - 1*one;
           change2.push(["ONE", (one*1)]);
         }
        
         if(cid[i][0] === "QUARTER" && count >= .25){
           var quarter = Math.floor(count/.25);
           quarter = quarter > (cid[i][1]/.25) ?  cid[i][1]/.25 : quarter;
           count = count - .25*quarter;
           change2.push(["QUARTER", (quarter*.25)]);
         }
        
        if(cid[i][0] === "DIME" && count >= .1){
           var dime = Math.floor(count/.1);
           dime = dime > (cid[i][1]/.1) ?  cid[i][1]/.1 : dime;
           count = count - .1*dime;
           change2.push(["DIME", (dime*.1)]);
         }
        
        if(cid[i][0] === "NICKEL" && count >= .05){
           var nickel = Math.floor(count/.05);
           nickel = nickel > (cid[i][1]/.05) ?  cid[i][1]/.05 : nickel;
           count = count - .05*nickel;
           change2.push(["NICKEL", (nickel*.05)]);
         }
        
        if(cid[i][0] === "PENNY" && count >= .01){
           var penny = Math.floor(count/.01);
           penny = penny > (cid[i][1]/.01) ?  cid[i][1]/.01 : penny;
           count = count - .01*penny;
           change2.push(["PENNY", (penny*.01)]);
         }
      
    }
  }
  
  change = change2;
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
