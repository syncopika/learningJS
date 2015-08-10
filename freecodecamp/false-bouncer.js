//falsey bouncer (remove false, negative-connotating items)

function bouncer(arr) {
  return arr.filter(function(value){
      return value !== false && 
             value !== null && 
             value !== 0 &&
        value !== undefined &&
        value !== ('') &&
        value !== isNaN;
  });
}

bouncer([7, 'ate', '', false, 9]);
