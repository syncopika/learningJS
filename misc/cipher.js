//quick cipher - need to wrap-around when character code goes past the last number corresponding to the end of the alphabet
//see http://www.pythonchallenge.com/pc/def/map.html

var letters = [];
var string = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.";
for(i=0;i<string.length;i++){
  letters.push(string.charCodeAt(i));
}
var string2 = "";

for(i=0;i<letters.length;i++){
  if(String.fromCharCode(letters[i]) == " " || String.fromCharCode(letters[i]) == "." || String.fromCharCode(letters[i]) == "'"){
    string2 += "_";
  }else{
  string2 += String.fromCharCode(letters[i]+= 2);
  }
}

console.log(string2)
