//oops, did this without the newline '\n' thing...

num = 4; //changeable

for(i=0;i<num;i++){
  if(i%2 == 0){
    str = ' ';
    for(j=0;j<num/2;j++){
      str += '# ';
    }
  }
  else{
    str = '';
    for(j=0;j<num/2;j++){
      str += '# ';
    }
  }
    console.log(str)
  }
