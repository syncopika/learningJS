//whoa, i thought this one was pretty easy. but maybe because i had just finished 'rightmost char', which was kinda similar.

var a = 'e f g h 3'.split(' '); //var a = line;
var b = a[a.length-1];
var count = 0;
if(a[b] !== undefined){
  console.log(a.reverse()[b]);
}
