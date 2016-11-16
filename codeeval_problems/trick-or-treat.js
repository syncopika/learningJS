var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
if (line != "") {

var a = line; //i.e. line = 'Vampires: 3, Zombies: 2, Witches: 1, Houses: 10' => output = 36
var b = a.split(',');
var c = b.map(function(name){return name.split(': ')});
var d = {};
for(i=0;i<c.length;i++){
  if(d[c[i][0]] === undefined){
    d[c[i][0]] = parseInt(c[i][1]);
  }
}
var total = 0;
var kids = 0;
for(property in d){
    if(property === 'Vampires'){
      kids += d[property];
      total += d[property]*3
    }
    if(property === ' Zombies'){
      kids += d[property];
      total += d[property]*4;
    }
    if(property === ' Witches'){ 
      kids += d[property];
      total += d[property]*5;
    }
    if(property === ' Houses'){
      total = d[property]*total;
  }
}

console.log(Math.floor(total/kids))
    }
});
