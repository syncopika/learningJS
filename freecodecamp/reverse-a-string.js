//my solutions to exercises on Free Code Camp (thanks Free Code Camp!)

//reverse a string

function reverseString(str) {
  var b = '';     //set up empty string
  for (i=str.length-1; i>-1; i--){    //look at the string you want reversed BACKWARDS
    b += str[i];    //add contents of string you want reversed to the empty string
  }
  return b;    //when loop is done, give me the complete reversed string
}

reverseString('hello');
