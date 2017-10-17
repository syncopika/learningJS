// try floodfill implementation with DFS
// 7:27 pm, est - 10/17/17: looks like it works! I will try this out with my funSketch application! ^^

var pixel = function(x, y, color){
	this.x = x;
	this.y = y;
	this.color = color;
}


// create a grid where there's the same color in the center, but different color outside
function createGrid(){

	var height = 12;  // rows
	var length = 12;  // cols
	var radius = 5;

	// create a circle of one color, the rest is another color 
	var color1 = 'green';
	var color2 = 'blue';
	
	var grid = [];
	
	for(var i = 0; i < height; i++){
		
		var newRow = [];
		
		for(var j = 0; j < length; j++){
			// create a new pixel 
			if(i > 4 && i < 8 && j !== 0 && j !== length - 1){
				newRow.push(new pixel(i, j, "blue "));
			}else{
				newRow.push(new pixel(i, j, "green"));
			}
			
		}
		grid.push(newRow);
	}
	
	return grid;

}

function printGrid(grid){
	for(var i = 0; i < grid.length; i++){
		var str = "";
		for(var j = 0; j < grid[i].length; j++){
			str += grid[i][j].color + " ";
		}
		console.log(str);
	}
}

// pass in a grid ref, the pixel where flood fill should start, and the color to change to 
function floodfill(grid, pixel, newColor){
	
	// find color of the pixel @ coordinate x, y
	var targetColor = pixel.color;
	var stack = [];
	var visited = {};	// use a hash!
	
	// get dimensions of grid
	var gridHeight = grid.length;
	var gridLength = grid[0].length;
	
	// do dfs to floodfill
	stack.push(pixel);
	var key = pixel.x + "," + pixel.y;
	visited[key] = 1;
	
	while(stack.length !== 0){
		
		var curr = stack.pop();
		var xCoord = curr.x;
		var yCoord = curr.y;
		
		// add current pixel to visited set 
		visited[xCoord+","+yCoord] = 1;
		
		// look for left, right, top, and bottom neighbors
		// make sure they're within index
		
		// remember that left and right neighbors have the same y-coordinate (as curr) 
		var left = xCoord - 1 >= 0 ? (xCoord - 1) : false; // assign left the left neighbor's x value if it's within bounds
		var right = xCoord + 1 < gridLength ? (xCoord + 1) : false;
		
		// top and bottom neighbors have the same x-coordinate (as curr)
		var top = yCoord - 1 >= 0 ? (yCoord - 1) : false;
		var bottom = yCoord + 1 < gridHeight ? (yCoord + 1) : false;
		
		// put neighbors that have not yet been visited on stack
		// BUT - these neighbors also need to be of the same color as the first pixel selected!!
		if(left !== false && visited[left+","+yCoord] === undefined && grid[left][yCoord].color === targetColor){
			stack.push(grid[left][yCoord]);
		}
		
		if(right !== false && visited[right+","+yCoord] === undefined && grid[right][yCoord].color === targetColor){
			stack.push(grid[right][yCoord]);
		}
		
		if(top !== false && visited[xCoord+","+top] === undefined && grid[xCoord][top].color === targetColor){
			stack.push(grid[xCoord][top]);
		}
		
		if(bottom !== false && visited[xCoord+","+bottom] === undefined && grid[xCoord][bottom].color === targetColor){
			stack.push(grid[xCoord][bottom]);
		}
		
		// then change curr's color 
		curr.color = newColor;
	}
	
}

function main(){
	
	var testGrid = createGrid();
	testGrid[0][6].color = "red";
	testGrid[1][4].color = "purple";
	testGrid[4][10].color = "red";
	printGrid(testGrid);
	console.log("------------------------------------------");
	floodfill(testGrid, testGrid[1][5], "yellow");
	printGrid(testGrid);
}

main();