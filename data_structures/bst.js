//binary search tree
//a binary search tree has smaller elements on the left subtree and larger elements on the right subtree for each node.

/**     (root)
*       /    \
*      (a)   (b)
*     /  \   /  \   
*    n    n  n   n    ; n = null
*
*  each node has a left and right.
*/


function BST(){
	
	//root is a Node object
	var root = null;
	
	/*** toString method ***/
	this.toString = function(){
		return toStringHelper(root);
	}
	
	function toStringHelper(node){
		if(node === null){
			return "";
		}
		//in-order traversal
		return toStringHelper(node.left) +  "data: " + node.data +  " " + toStringHelper(node.right);
	}
	
	/*** getSize method ***/
	this.getSize = function(){
		return getSizeHelper(root);
	}
	
	//getSize helper
	function getSizeHelper(node){
		if(node === null){
			return 0;
		}
		return 1 + getSizeHelper(node.left) + getSizeHelper(node.right);
	}
	
	/*** add method ***/
	this.add = function(newData){
		if(root === null){
			//if this tree is empty
			var newNode = new Node(newData);
			root = newNode;
	
			return;
		}
		return addHelper(newData, root);
	}
	
	//add helper function
	function addHelper(newData, node){
		
			if(newData < node.data){
				//if the new data is less than the current node's data, go left			
				//is the left child of the next node null?? if it is, place the new data there
				if(node.left === null){
					var newNode = new Node(newData);
					node.left = newNode;
					
					return;
				}
				//otherwise keep looking left
				return addHelper(newData, node.left);
				
			}else if(newData > node.data){
				//if the new data is greater than the current node's data, go right
				//is the right child of the next node null? if so, put the new data there
				if(node.right === null){
					var newNode = new Node(newData);
					node.right = newNode;
					
					return;
				}
				return addHelper(newData, node.right);
			}else{
				return;
			}	
	}
	
	/*** remove function ***/
	this.remove = function(data){
		return removeHelper(data, root);
	}
		
	//this helper is encapsulated within the remove function
	function removeHelper(data, node){
		//base cases
		if(node === null){
			return;
		}
		//if you want to remove the root and only 1 node
		if(node === root && data === root.data){
			if(isLeaf(node)){
				root = null;
				return;
			}
		}
		if(node.left !== null && node.left.data === data && isLeaf(node.left)){
			node.left = null;
			return;
		}
		if(node.right !== null && node.right.data === data && isLeaf(node.right)){
			node.right = null;
			return;
		}
		//data to remove is an inner node. or root with at least 1 child 
		if(data === node.data){
			//if the node isn't a leaf!
			//find the MAX VALUE from the left subtree
			//and replace the current node's left child's VALUE with it (not the node object itself)
			//console.log("maximum value: " + getMax(node.left.left));
			if(getMax(node.left) !== null){
				node.data = getMax(node.left);
				//start the recursion over again at the current node's left child
				//(but only if current node data is not the same as the left child's)
				//this is like a swapping process that continues until all the left children have moved up one	
				//use the new, replaced DATA VALUE as the one to DELETE. 
				//this forces the swapping until a leaf is reached
				if(node.data === node.left.data && isLeaf(node.left)){
					return removeHelper(node.data, node);
				}else{
					return removeHelper(node.data, node.left);
				}
			}else{
				//like above, but replacing with the MIN on the RIGHT SUBTREE
				if(getMin(node.right) !== null){
					node.data = getMin(node.right);
					if(node.right.data === node.data && isLeaf(node.right)){
						return removeHelper(node.data, node);
					}else{
						return removeHelper(node.data, node.right);
					}
				}
			}	
		}else if(data > node.data){
			//go right
			return removeHelper(data, node.right);
		}else{
			//otherwise go left
			return removeHelper(data, node.left);
		}
	}
	
	//check if a node is a leaf
	function isLeaf(node){
		if(node === null){
			return false;
		}else if(node.left === null && node.right !== null){
			return false;
		}else if(node.right === null && node.left !== null){
			return false;
		}else{
			return node.left === null && node.right === null;
		}
	}
	
	//helper to find the max value in the tree
	//returns the maximum node data value
	function getMax(node){
		//case for no nodes
		if(node === null){
			return null;
		}
		if(node.right === null){
			return node.data;
		}
		return getMax(node.right);
	}
	
	//returns the minimum data value in the tree
	function getMin(node){
		//case for no nodes
		if(node === null){
			return null;
		}
		if(node.left === null){
			return node.data;
		}
		return getMin(node.left);
	}
	
	
	//search - returns true if data is in tree, false if not
	//target should be the data value to look for
	this.search = function(target){
		return searchHelper(root, target);
	}
	
	function searchHelper(node, target){
			
		if(node === null){
			return false;
		}
		if(target === node.data){
			return true;
		}	
		//if tree > 1 node, figure which direction to go
		if(target < node.data){
			//look left
			return searchHelper(node.left, target);
		}else if(target > node.data){
			//look right
			return searchHelper(node.right, target);
		}
	}
	
	// get the depth of the tree
	this.getDepth = function(){
		return getDepthHelper(root);
	}

	function getDepthHelper(node){
		if(node === null){
			return 0;
		}
		if(node.left === null && node.right === null){
			return 1;
		}
		return Math.max(1 + getDepthHelper(node.left), 1 + getDepthHelper(node.right));
	}
	
	//print tree in graphical form
	this.printTree = function(){
		
		//use a queue to traverse breadth-first!
		var queue = [];
		var nodes = [];
		
		queue.push(root);
		
		while(queue.length > 0){
			
			var curr = queue.shift();
			
			nodes.push(curr);
			
			if(curr.left !== null && curr.right !== null){
				queue.push(curr.left);
				queue.push(curr.right);
			}else if(curr.left !== null){
				queue.push(curr.left);
			}else if(curr.right !== null){
				queue.push(curr.right);
			}
		}
		
		//show nodes
		console.log(nodes);
		
		//depth includes the connecting lines between nodes
		var depth = this.getDepth() + (this.getDepth()-1);
		var rows = this.getDepth();
		var height = depth;
		var width = Math.pow(2, rows-1) + (Math.pow(2, rows-1) / 2)*3 + ((Math.pow(2, rows-1) / 2) - 1);
		var currRow = 0;
		
		var table = [];
		for(var i = 0; i < height; i++){
			var line = [];
			for(var j = 0; j < width; j++){
				line.push(" ");
			}
			table.push(line);
		}
		
		/* set up tree */
		var rowNodeCounter = 0;
		var rowStop = 0;
		var numChildren = 0;
		//distance between a number and the connecting line to next node
		var distance = this.getDepth() - 1; 

		for(var i = 0; i < nodes.length; i++){
			//every node is an object, with left and right properties!	
			if(nodes[i].left === null && nodes[i].right === null){
				rowNodeCounter++; //even if we skip a node, we need to count it!
				continue;
			}
			
			if(i === 0){
				var index = Math.floor(width / 2);
				table[currRow][Math.floor(width / 2)] = nodes[i].data;
				
				if(nodes[i].left !== null){
					table[currRow + 1][index - distance] = '/';
					table[currRow + 2][index - (distance+1)] = nodes[i].left.data;
					
					//figure out how many children in next row
					rowStop += 1;
				}
				if(nodes[i].right !== null){
					table[currRow + 1][index + distance] = '\\';
					table[currRow + 2][index + (distance+1)] = nodes[i].right.data;
					
					//figure out how many children in next row
					rowStop += 1;
				}
				
				currRow += 2;
				--distance;
			}else{
					
				//move up in rows after nodes for one row completed
				if(rowNodeCounter === rowStop){
					rowStop = numChildren;
					rowNodeCounter = 0;
					currRow += 2;
					--distance;
				}
				
				var index = table[currRow].indexOf(nodes[i].data);
			
				//temp fix
				if(index === -1){
					break;
				}
				
				//make sure to account for this node in the row
				rowNodeCounter++;
				
				if(nodes[i].left !== null){
					table[currRow + 1][index - distance] = '/';
					table[currRow + 2][index - (distance+1)] = nodes[i].left.data;
					numChildren++; //calculate how many children in next row 
				}
				if(nodes[i].right !== null){
					table[currRow + 1][index + distance] = '\\';
					table[currRow + 2][index + (distance+1)] = nodes[i].right.data;
					numChildren++;
				}
			}
		}		
		/* display everything */
		for(var i = 0; i < table.length; i++){
			console.log(table[i].join(""));
		}
	}
}

//node object 
function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}



//////// TESTING

var bst = new BST();
bst.add(5);
bst.add(3);
bst.add(6);
bst.add(4);

bst.printTree();


var bst1 = new BST();
bst1.add(5);
bst1.add(3);
bst1.add(2);
bst1.add(1);
bst1.printTree();


var bst2 = new BST();
bst2.add(2);
bst2.add(1);
bst2.add(4);
bst2.add(3);
bst2.add(5);

bst2.printTree();
//console.log(bst2.toString());


var bst3 = new BST();
bst3.add(4);
bst3.add(3);
bst3.add(5);
bst3.add(1);
bst3.add(2);

bst3.printTree();
//console.log(bst3.toString());


var bst4 = new BST();
bst4.add(5);
bst4.add(4);
bst4.add(7);
bst4.add(1);
bst4.add(10);

bst4.printTree();
//console.log(bst4.toString());


var bst5 = new BST();
bst5.add(1);
bst5.add(2);
bst5.add(3);
bst5.add(4);
bst5.add(5);

bst5.printTree();
//console.log(bst5.toString())


var bst6 = new BST();
bst6.add(6);
bst6.add(4);
bst6.add(8);
bst6.add(2);
bst6.add(5);
bst6.add(7);
bst6.add(10);

bst6.printTree();
//console.log(bst5.toString())

/*

console.log("---------------------------");
bst.remove(4);
console.log(bst.toString());
console.log(bst.getSize());

console.log("---------------------------");
bst.add(1);
console.log(bst.toString());
console.log(bst.getSize());

console.log("---------------------------");
var bst2 = new BST();
bst2.add(5);
bst2.add(3);
bst2.add(6);
bst2.add(4);
bst2.add(2);

*/

/****
*
*             (5)
*            /   \
*           (3)  (6)
*           / \
*         (2) (4)
*
*

console.log(bst2.toString());

console.log("---------------------------");
bst2.remove(3);
console.log(bst2.toString());
console.log("size after removing 3: " + bst2.getSize());
console.log("---------------------------");





/****
* should look like:
*
*             (5)
*            /   \
*           (2)  (6)
*             \
*             (4)
*
*	bst2.remove(5); 
*/

/****
* should look like:
*
*             (4)
*            /   \
*           (2)  (6)
*             
*             
*

console.log(bst2.toString());
console.log("size after removing 5: " + bst2.getSize());

console.log("---------------------------");
var bst3 = new BST();
bst3.add(1);
bst3.remove(1);
console.log(bst3.toString());


console.log("---------------------------");

var tree = new BST();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(8);
tree.add(10);
tree.add(4);
tree.add(2);
//tree.add(9);
		
console.log(tree.toString());
console.log("-----------");
tree.remove(100); //should be false
console.log(tree.search(20));
console.log(tree.toString());
console.log("-----------");


*
*/


//degenerate tree
/*
     (1)
        \
	 (2)
	   \
	    (3)
	       \
         	(4)
		  \
	      	  (5)
		  
		  
		  
var bst4 = new BST();
bst4.add(1);
bst4.add(2);
bst4.add(3);
bst4.add(4);
bst4.add(5);

console.log(bst4.toString());
bst4.remove(4);
console.log(bst4.toString());
		  
		  
		  
		  
*/




