//truncate a string

function truncate(str, num) {
  if (str.length > num){          //if length of str is the same as num, no truncation is needed
  return str.slice(0,num-3) + '...';   //just give me the section of str that is between the first character and
}                                      // 3 characters before the last (which will be replaced with ellipses)
else{
  return str;
}
}
