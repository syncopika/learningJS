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
	
	
	//remove function
	this.remove = function(data){
		var counter = 0;
		return removeHelper(data, root);
		
		
	//this helper is encapsulated within the remove function
	function removeHelper(data, node){
		//base case
		if(node === null){
			return; //if a dead end is reached and nothing found
		}
		
		//if there is only one node (i.e. the root)
		if(data === root.data){
			map.splice(counter, 1);
			root = null;
			return;
		}
		
		if(node.left !== null && data === node.left.data){
				//is the node a leaf???
				if(isLeaf(node.left)){
					node.left = null; //make that node null
					return;
				}else{
					//if the node isn't a leaf!
					//find the MAX VALUE from the left subtree
					//and replace the current node's left child's VALUE with it (not the node object itself)
					console.log("maximum value: " + getMax(node.left.left));
					if(getMax(node.left.left) !== null){
						node.left.data = getMax(node.left.left);
						//start the recursion over again at the current node's left child 
						//this is like a swapping process that continues until all the left children have moved up one	
						//use the new, replaced DATA VALUE as the one to DELETE. this forces the swapping until a leaf is reached
						return removeHelper(node.left.data, node.left);
					}else{
						//like above, but replacing with the MIN on the RIGHT SUBTREE
						if(getMin(node.right.right) !== null){
							node.right.data = getMin(node.right.right);
							return removeHelper(node.right.data, node.right);
						}
					}
				}	
		}else if(node.right !== null && data === node.right.data){
			//is the node a leaf???
			if(isLeaf(node.right)){
				node.right = null; //make that node null
				return;
			}else{
					//if the node isn't a leaf!
					//find the MAX VALUE from the left subtree
					//and replace the current node's left child's VALUE with it (not the node object itself)
					if(getMax(node.left.left) !== null){
						node.left.data = getMax(node.left.left);
						//start the recursion over again at the current node's left child 
						//this is like a swapping process that continues until all the left children have moved up one
						return removeHelper(node.left.data, node.left);
					}else{
						if(getMin(node.right.right) !== null){
							node.right.data = getMin(node.right.right);
							return removeHelper(node.right.data, node.right);
						}
					}
				}
		}else if(data > node.data){
			//go right
			counter++;
			return removeHelper(data, node.right);
		}else{
			//otherwise go left
			counter++;
			return removeHelper(data, node.left);
		}
	}
	}
	
	//check if a node is a leef
	function isLeaf(node){
		return node.left === null && node.right === null;
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
	
	
	//search
	this.search = function(target){
		
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

console.log(bst.toString());
console.log(bst.getSize());

/*
console.log("---------------------------");
bst.remove(4);
console.log(bst.getMap());
console.log(bst.getSize());

console.log("---------------------------");
bst.add(1);
console.log(bst.getMap());
console.log(bst.getSize());
*/

console.log("---------------------------");
var bst2 = new BST();
bst2.add(5);
bst2.add(3);
bst2.add(6);
bst2.add(4);
bst2.add(2);
console.log(bst2.toString());

console.log("---------------------------");
bst2.remove(3);
console.log(bst2.toString());
console.log(bst2.getSize());











