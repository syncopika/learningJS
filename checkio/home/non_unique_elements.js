function nonUniqueElements(data) {
    
    var unique = {}; //log which elements are unique
    for(var i = 0; i < data.length; i++){
        if(unique[data[i]] === undefined){
            unique[data[i]] = 0;
        }else{
            unique[data[i]]++;
        }
    }
    
    var copy = data.slice(); //make a new copy of the data with slice
    var toPop = 0; //record how many times to call pop() on the data
    var marker = 0; //keep track of which elements from copy to repaste into data
    
    for(var j = 0; j < data.length; j++){
        if(unique[data[j]] == 0){
            toPop++; //if we find a unique element, increment toPop
        }else{
            data[marker++] = copy[j]; //otherwise repaste non-unique element
                                      //into data where marker is
        }
    }
    
    //by now, the data should be revised so that all the non-unique elements
    //are listed first in the order they came in. there might be some extra 
    //elements now, though, so call pop() to remove them
    //example: [1,2,3,2] -> [2,2,3,2] would be the resulting data. we want [2,2]
    //though. toPop would be 2. 
    while(toPop > 0){
        data.pop(); 
        toPop--;
    }
    
    return data;
}
