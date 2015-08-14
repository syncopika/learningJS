//i admit i needed to go to stack overflow for help
//this is a great opportunity to practice recursion!!

function convert(num) {
  if(num >= 30){return "XXX" + convert(num-30);}  //keep subtracting to fill up a string with the appropriate numerals!
  if(num >= 20){return "XX" + convert(num-20);}
  if(num >= 10){return "X" + convert(num-10);}
  if(num >= 9){return "IX" + convert(num-9);}
  if(num >= 5){return "V" + convert(num-5);}
  if(num >= 4){return "IV" + convert(num-4);}
  if(num >= 1){return "I" + convert(num-1);}
  if(num < 1){return "";}
}
convert(36);
