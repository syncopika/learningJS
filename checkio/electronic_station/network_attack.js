function capture(data) {
    
    var nodes = [];
    var time = []; 
    var visited = {};
    var total = 0;
    
    //first collect the security value/time for each computer
    for(var i = 0; i < data.length; i++){
        time.push(data[i][i]);
    }
    
    //get the first layer of nodes
    for(var i = 1; i < data[0].length; i++){
        if(data[0][i] === 1){
            nodes.push(i);
        }
    }
    
    while(time.reduce(function(a,b){return a+b}) !== 0){
        
        var curLength = nodes.length; //record length of current node list
        
        for(var j = 0; j < curLength; j++){
            
            //look at a node in the list
            var node = nodes[j];
            
            //subtract 1 from each node in time
            if(time[node] > 0){
                time[node]--;
            }
            
            //check if security value of that node is 0 now
            if(time[node] === 0 && !(node in visited)){
                //if it is, add this node to visited
                visited[node] = 0;
                
                //find the next neighbors and add to layers
                for(var k = 1; k < data[node].length; k++){
                    if(k !== node && data[node][k] === 1){
                        //make sure it's a computer not looked at yet
                        if(!(k in visited) && !(nodes.includes(k))){
                            nodes.push(k);
                        }
                    }
                }
                
                //then delete from nodes
                nodes.splice(j,1);
                //we pushed in a new node, but don't check it this iteration
                curLength--;
                j--; //don't skip nodes when splicing
            }
        }
        //every time we have to go through the while loop, add 1 to total.
        total++; 
    }
    return total;
}
