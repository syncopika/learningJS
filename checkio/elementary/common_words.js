function commonWords(first, second) {
    
    var table = {};
    first = first.toLowerCase().split(',').sort();
    second = second.toLowerCase().split(',');
    
    
    for(var i = 0; i < first.length; i++){
        if(table[first[i]] === undefined){
            table[first[i]] = 0;
        }
    }
    
    //for the second list, if same word is found, increment
    for(var j = 0; j < second.length; j++){
        if(table[second[j]] !== undefined){
            table[second[j]]++;
        }
    }
    
    //put all common words in an array, then call toString() on it. that will
    //ensure commas are placed properly between words
    var str = [];
    for(var word in table){
        if(table[word] > 0){
            str.push(word);
        }
    }
    
    //if there were no common words, return empty string
    if(str.length === 0){
        return "";
    }
    
    return str.toString();
}
