//this one was a bit tricky because initially I assumed that that the trailing string would be one word.
//BUT! the trailing string could be a fragment of the last word in the first string.

var a = line; //example: 'San Francisco esta esfgn sdfhyad,hyad', 'Hello World,World'
a = a.split(',');
var revFrag = '';
var reversed = '';
//reverse first string
for(i=a[0].length-1;i>=0;i--){
  reversed += a[0][i];
}
//console.log(reversed)
//reverse the second string too
//so that we can compare the reversed word/fragment with the back end of the reversed first string
for(i=a[1].length-1;i>=0;i--){
  revFrag += a[1][i];
}
//console.log(revFrag)
var answer = 1;
for(i=0;i<revFrag.length;i++){
  if(revFrag[i] !== reversed[i]){
    answer = 0;
  }
}
console.log(answer)
