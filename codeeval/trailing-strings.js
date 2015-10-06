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
//I did this because I thought about using substring and indexOf. But indexOf will always just take the first occurence
//of a character, not the last one, which I want here. 
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
