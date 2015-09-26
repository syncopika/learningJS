//this is a 'partial' solution

var a = 'Cabernet Merlot Noir | ot'; //var a = line; (the line is fed to var a through the sample code codeeval provides.)
var wineName ='';
var frag='';
var newName='';
var table = {};
for(i=0;i<a.indexOf('|')-1;i++){
  wineName += a[i];
}
for(i=a.indexOf('|')+2;i<a.length;i++){
  frag += a[i];
}
wineName = wineName.split(' ');
frag = frag.split('');

for(i=0;i<wineName.length;i++){
  table[i] = 0;
}

for(i=0;i<wineName.length;i++){
	for(j=0;j<frag.length;j++){
      if(wineName[i].indexOf(frag[j]) > -1){
        table[i] += 1;
      }
    }
}
for(property in table){
  if(table[property] === frag.length){
    newName += wineName[property] + ' ';
  }
}
if(newName === ''){
    newName = 'false';
  }

newName = newName.trim();
console.log(newName)
