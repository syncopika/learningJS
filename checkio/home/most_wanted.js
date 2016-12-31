function mostWanted(data) {
    
    //set everything lower case first
    data = data.toLowerCase();
    
    //this allows for all the letters to be put in the table in alphabetical
    //order
    data = data.split('').sort(); 
    
    var table = {};
    for(var i = 0; i < data.length; i++){
        
        if(data[i].charCodeAt(0) < 97 || data[i].charCodeAt(0) > 122){
            continue;
        }
        
        if(table[data[i]] === undefined){
            table[data[i]] = 0;
        }else{
            table[data[i]]++;
        }
    }
    
    var max = 0; //current maximum
    var letter; //current letter
    //keep looking through the letters (in the table) and find the one
    //with the most occurrences
    for(var l in table){
        if(table[l] > max){
            max = table[l];
            letter = l;
        }
    }
    
    //what if there was no maximum? since they're sorted in the table,
    //just get the first letter
    if(max === 0){ 
        for(var l in table){
            letter = l;
            break;
        }
        return letter;
    }else{
        return letter;
    }
}
