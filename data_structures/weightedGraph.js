//weighted graph data structure
//good for shortest-path finding

function WeightedGraph(){
	
	//using var like this, instead of this.vertices,
	//makes vertices act like a 'private' variable,
	//so it can't get accessed from outside.
	var vertices = {};
	
	this.addVertex = function(vertex){
	
		//only add a vetex if it doesn't exist in the set
		if(vertices[vertex] === undefined){
			vertices[vertex] = {};
		}else{
			return;
		}
		
	}
	
	this.addNeighbor = function(vertex, neighbor, weight){
		
		if(vertices[neighbor] !== undefined && vertices[vertex] !== undefined){
			vertices[vertex][neighbor] = weight;  //vertices = {vertex: {neighbor: weight}}
			vertices[neighbor][vertex] = weight;  //same as above, but with neighbor and vertex switched
		
		}else if(vertices[neighbor] === undefined && vertices[vertex] === undefined){
			vertices[vertex] = {};
			vertices[neighbor] = {};
		
		}else if(vertices[vertex] === undefined){
			vertices[vertex] = {};
		
		}else if(vertices[neighbor] === undefined){
			vertices[neighbor] = {};

		}
		vertices[neighbor][vertex] = weight;
		vertices[vertex][neighbor] = weight;
	}
	
	this.showGraph = function(){
		console.log(vertices);
	}
	
	//do a search for the shortest path from one vertex to another using Dijkstra's Algorithm
	this.shortestPath = function(a, b){
		
		//set up a hashmap for recording each vertex's predecessor
		var predecessors = {};
		
		//set up a hashmap for each vertex's cost of getting to itself
		var cost = {};
		
		//just get the list of vertices (no neighbors)
		var vertexSet = {};
		
		//preset values for each vertex in vertices
		for(vertex in vertices){
			predecessors[vertex] = null;
			cost[vertex] = 10000000; //a ridiculously high number (should be infinity)
			vertexSet[vertex] = 1; //1 will act like a counter to keep track of how many things I have in vertexSet. each element can only equal 1. 
		}
		
		//finished set = records vertices we looked at already
		var finishedSet = {};
		
		//start at vertex a
		//set cost[a] = 0
		cost[a] = 0;
		//var currVertex = a;
		
		while(!equals(finishedSet, vertexSet)){
			
			//find the smallest cost vertex not in finished set
			var smallestVertex;
			var currentSmallestCost = 1000000;
			for(vertex in cost){
				if(finishedSet[vertex] === undefined && cost[vertex] < currentSmallestCost){
					smallestVertex = vertex;
					currentSmallestCost = cost[vertex];
				}
			}
			
			//put smallestVertex in finishedSet
			finishedSet[smallestVertex] = 1;
			
			//look at neighbors of the current vertex
			for(neighbor in vertices[smallestVertex]){
				//if there's a neighbor vertex that, when adding its weight with the cost it takes to get
				//to the current vertex, costs less than the current cost of the neighbor, make that neighbor vertex
				//update the cost it takes to get to that neighbor, as well as predecessor list 
				if((vertices[smallestVertex][neighbor] + cost[smallestVertex]) < cost[neighbor]){
					cost[neighbor] = vertices[smallestVertex][neighbor] + cost[smallestVertex];
					//update predecessor
					predecessors[neighbor] = smallestVertex;
				}
			}
		}
		
		//console.log(cost);
		//console.log(predecessors);
		//now get shortest path
		var path = "";
		var precedingVertex = b;
		while(path[path.length-1] !== a){
			path += precedingVertex;
			precedingVertex = predecessors[precedingVertex]; 
		}
		
		//reverse path 
		var reversePath = "";
		for(var i = path.length - 1; i >= 0; i--){
			reversePath += path[i];
		}
		console.log("shortest path: " + reversePath);
	}
	
	//equals method to compare my finishedSet and vertexSet
	function equals(a, b){
		
		var aTotal = 0;
		for(property in a){
			aTotal += a[property];
		}
		
		var bTotal = 0;
		for(property in b){
			bTotal += b[property];
		}
		
		return aTotal === bTotal;
	}

}


//test

var graph1 = new WeightedGraph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("A"); //nothing should happen
graph1.addVertex("C");

graph1.addNeighbor("A", "C", 5);
graph1.addNeighbor("B", "A", 2);

graph1.showGraph();

var graph2 = new WeightedGraph();
graph2.addNeighbor("A", "B", 9);
graph2.addNeighbor("A", "D", 8);
graph2.addNeighbor("A", "F", 3);
graph2.addNeighbor("A", "C", 4);
graph2.addNeighbor("D", "B", 1);
graph2.addNeighbor("F", "D", 6);
graph2.addNeighbor("C", "D", 5);
graph2.addNeighbor("F", "G", 7);
graph2.addNeighbor("G", "B", 2);
graph2.addNeighbor("G", "E", 6);
graph2.addNeighbor("E", "B", 2);

graph2.shortestPath("G", "C");
