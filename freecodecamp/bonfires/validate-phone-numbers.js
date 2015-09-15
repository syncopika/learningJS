//validate US telephone number

function telephoneCheck(str) {
  
  //in regex, .? means optional. the d{#} indicates how many digits to be expected consecutively
  //the [)s-]? means either a ')', space, or hyphen could show up (but not necessarily).
  //also, I noticed it was important to have the ^ at the front and $ at the back, just to designate a start and end point I guess?
  
  var a = /^[1].?.?\d{3}.?.?\d{3}.?.?\d{4}$/g;
  var b = /^[^a-zA-Z0-9]?\d{3}[)s-]?\d{3}[\s-]?\d{4}$/g;

  if(a.test(str)){
    return true;
  }
  
  if(b.test(str)){
    return true;
  }

  else{
    return false;
  }

} 




telephoneCheck("555-555-5555");
