//heap data structure
//a heap is a kind of binary tree that has two requirements:
// 1. it must be a complete binary tree 
/*
*         an example of a complete tree:
*                   
*                  (3)
*                 /   \
*               (4)    (5)
*               / \    / 
*             (6) (7) (8   
*          *all left nodes are filled before the right ones!
*          *only up to 2 children per node		
*	
*          an example of an incomplete tree:
*
*		   (3)
*                 /   \
*               (4)    (5)
*               / \      \
*             (6) (7)    (8)
*           *there is no left child for 5! incomplete!   
*/
// 2. All child nodes must be larger than the parent! (for a min-heap). A max-heap is the opposite,
//    in that all children are larger. 		
//
// A heap is much easier to manage by using an array as the underlying data structure!
// Additionally, a heap typically has two main functions - getSmallest(), which gets the smallest node, which is the root,
// and insert(), which just adds a new node to the heap and rearranges the tree accordingly.


// what is a heap good for? when would be a good time to use it?
// since the remove() function gets the smallest(or largest, if max-heap) element, it's like a priority queue.
// if you have a bunch of things, each with some different level of urgency, you can just add them all to a heap
// and easily retrieve the most important thing first. so in a way, a heap could be like a good task-scheduler.

//this one is technically a min-heap
function Heap(){
	
	var theHeap = [];
	
	this.add = function(data){
		
		//add the new data to the array first
		theHeap.push(data);
		
		//then "bubble up" if the new data is smaller than the parent
		//start at the end of the array and go backwards
		//"pos" = "position"
		for(var pos = theHeap.length - 1; pos > 0; pos--){
			//remember to compare the child with the parent!
			//therefore, to get the parent's index in the array, it is (i-1)/2
			//in Java, division automatically uses floor I think. 
			var parentPos = Math.floor((pos-1)/2);
			if(theHeap[pos] < theHeap[parentPos]){
				swap(pos, parentPos);
			}
		}
	}
	
	this.remove = function(){
		//take the first element in the array (should be the smallest one)
		//and make it null (you could probably skip this part)
		theHeap[0] = null;
		//then take the last element in the array (which would be the largest)
		//and put it in the 0th index of the array
		theHeap[0] = theHeap[theHeap.length - 1];
		//then remove the last element (slice does not modify the original array) 
		theHeap = theHeap.slice(0, theHeap.length - 1);
		//now rearrange the heap
		
		//need to consider the case when there are only two elements left!! can't enter the 
		//for-loop with this condition.
		if(theHeap.length == 2){
			if(theHeap[1] < theHeap[0]){
				swap(1, 0);
			}
		}
		
		
		//this time we "bubble down" since we have the largest element at the root
		//we're checking if (2*i+2) is less than the heap.length because we're going
		//to check if the node-to-be-bubbled-down is less than or greater than the
		//left AND the right child. (we need to figure out which child is smallest)
		//in the array, the left and right child's index of a parent 
		//can be found using (2*i + 1) and (2*i + 2), respectively. try it out on paper!
		//we don't want "pos" to exceed the array's length, so the index of the right child
		//will let us know if we've reached the end of the tree
		for(var pos = 0; (2*pos + 2) < theHeap.length; pos++){
			
			//first find the smallest of the two children
			//that way we know which way to bubble down
			var smallestChildIndex;
			if(theHeap[pos*2 + 2] > theHeap[pos*2 + 1]){
				//if the right > eft, the left is the smallest child
				smallestChildIndex = pos*2 + 1;
			}else{
				smallestChildIndex = pos*2 + 2;
			}
			
			//then compare our current node at "pos" with the smallest child
			if(theHeap[pos] > theHeap[smallestChildIndex]){
				swap(pos, smallestChildIndex);
			}
		}
		
	}
	
	this.print = function(){
		return theHeap;
	}
	
	//don't use indexOf so duplicates can be allowed
	//the two parameters are supposed to be integers corresponding to index
	function swap(data1index, data2index){
		data1 = theHeap[data1index];
		data2 = theHeap[data2index];
		theHeap[data1index] = data2;
		theHeap[data2index] = data1;
	}
}


/********************* TESTS! *****************************/

var heap1 = new Heap();
heap1.add(3);
heap1.add(2);
heap1.add(6);
heap1.add(1);

console.log(heap1.print()); //should get [1 2 6 3]

/*****************
*
*        (1)
* 	/   \
*      (2)  (6)
*      /
*    (3)
*
*
*//////////////////

heap1.add(4);
heap1.add(5);

/*****************
*should look like this now:
*
*	 (1)
* 	/   \
*      (2)   (5)
*      / \    /
*    (3) (4) (6)
*
*
*//////////////////

console.log(heap1.print()); //should get [1 2 5 3 4 6]

heap1.remove();

/*****************
*should look like this now:
*
*	 (2)
* 	/   \
*      (3)   (5)
*      / \    
*    (6) (4) 
*
*
*//////////////////

console.log(heap1.print()); //should get [2 3 5 6 4]


var heap2 = new Heap();
heap2.add(5);
heap2.add(3);
heap2.add(6);
console.log(heap2.print()); //[3, 5, 6]
/*************
*
*     (3)
*    /   \
*   (5)  (6)
*
*/

heap2.remove();

/*************
*
*     (5)
*        \
*        (6)
*
*/
console.log(heap2.print()); //[5, 6]







