// linked list
function Node(val){
	this.next = null;
	this.value = val;
}

function LinkedList(){
	this.head = null;
	this.tail = null;
	
	this.addToTail = function(v){
		
		var newNode = new Node(v);
		var curr = this.tail;
		
		if(curr === null){
			this.tail = newNode;
			this.head = newNode;
			return;
		}else{
			curr.next = newNode;
			this.tail = newNode;
		}
		return;
	}
	
	this.printList = function(){
		var curr = this.head;
		var result = "";
		while(curr !== null){
			result += curr.value + "->";
			curr = curr.next;
		}
		console.log(result);
	}
}

// example
var l = new LinkedList();
l.addToTail(2);
l.addToTail(3);
l.addToTail(4);
l.addToTail(6);
l.addToTail(3);
l.addToTail(5);
l.addToTail(3);
//l.printList();

var l2 = new LinkedList();
l2.addToTail(1);
l2.addToTail(1);

// 2.1 remove dups from unsorted linked list
function removeDups(linkedlist){
	
	var seenList = [];
	var curr = linkedlist.head;
	
	// check if the NEXT node (not the current one) appears in the seenList
	while(curr !== null){
		// add curr to seenList
		seenList.push(curr.value);
		
		if(seenList.indexOf(curr.next.value) >= 0){
			curr.next = curr.next.next;
		}
	
		curr = curr.next;
	}
	return linkedlist;	
}

// what if no buffer (i.e. array or hashset) allowed??
function removeDups2(linkedlist){
	// have 2 pointers
	var curr = linkedlist.head;
	
	while(curr !== null){
		// curr2 looks at rest of list starting after curr and looks for duplicates
		var curr2 = curr; 
		
		while(curr2.next !== null){
			if(curr2.next.value === curr.value){
				curr2.next = curr2.next.next;
			}else{
				curr2 = curr2.next;
			}
		}
		curr = curr.next;
	}
	return linkedlist;
}

console.log("2.1 TESTS")
console.log("---------------");

var a = removeDups2(l);
a.printList();

var b = removeDups2(l2);
b.printList();

console.log("---------------\n");

// 2.2 return Kth to Last element of a singly linked list 
// questions to ask: can I assume that K will be less than or equal to the number of nodes in the list?
function kthToLast(linkedlist, k){
	
	var curr = linkedlist.head;
	
	// find the node where .next K times will equal null.
	while(curr.next !== null){
		var findKth = curr;
		var n = k;
		while(n > 0){
			findKth = findKth.next;
			n--;
			if(findKth === null && n > 0){
				//console.log("K > number of nodes available.");
				return "K > number of nodes available.";
			}
		}
		if(findKth === null){
			return curr;
		}
		curr = curr.next;
	}
	
}

console.log("2.2 TESTS")
console.log("---------------");
console.log(kthToLast(l, 2));
console.log("---------------");
console.log(kthToLast(l, 3));
console.log("---------------");
console.log(kthToLast(l, 10));
console.log("---------------\n");

// 2.3 delete middle node when given only the middle node 
function deleteMiddle(node){
	
	if(node === null || node.next === null){
		return;
	}
	
	// since node is the node to delete, take the next node's data and
	// put it in this node. 
	node.value = node.next.value;
	node.next = node.next.next;
}

var l3 = new LinkedList();
l3.addToTail('a');
l3.addToTail('b');
l3.addToTail('c');
l3.addToTail('d');
l3.addToTail('e');

function getNode(linkedlist, val){
	
	var n = linkedlist.head;
	while(n !== null){
		if(n.value === val){
			return n;
		}
		n = n.next;
	}
	return null;
}

console.log("2.3 TESTS")
console.log("---------------");
l3.printList();
deleteMiddle( getNode(l3, 'c') );
l3.printList();
console.log("---------------\n");


// 2.4 partition
// partition a linked list around value X so that all nodes less than X comes before
// all nodes greater than or equal to X 

// options: make 2 separate lists (1 for less than X, 1 for >= lists, then join them)
// each time you find less than X append to head, otherwise append to tail 
function partition(linkedlist, x){
	
	var curr = linkedlist.head;
	
	while(curr !== null){
		
		var nextNode = curr.next;
		
		if(nextNode !== null && nextNode.value < x){
			curr.next = nextNode.next;
			
			var temp = linkedlist.head.next;
			linkedlist.head.next = nextNode; // just keep appending the smaller nodes < x to the head.
			nextNode.next = temp;
		
			curr = curr; // if you need to move the next node to the front, start over from this node and see the next node 
                         // is also smaller than x.			
		}else{
			
			curr = curr.next
		}
	}
	return linkedlist;
}

var l4 = new LinkedList();
l4.addToTail(3);
l4.addToTail(5);
l4.addToTail(8);
l4.addToTail(5);
l4.addToTail(10);
l4.addToTail(2);
l4.addToTail(1);

console.log("2.4 TESTS");
console.log("---------------");
l4.printList();
(partition(l4, 5)).printList();
console.log("---------------\n");

// 2.5 sum lists
// each node = 1 digit. the nodes represent a number in reverse order.
// i.e. 2 -> 1 -> 5 = 512
function sumlists(l1, l2){
	
	var num1 = 0;
	var num2 = 0;
	var total = 0;
	
	var place = 1;
	var curr = l1.head;
	while(curr != null){
		num1 += place * curr.value;
		place *= 10;
		curr = curr.next;
	}
	
	// do the same for l2 
	// probably should write a separate function to get a number from a given list 
	// since this code is a duplicate of the above :/ .
	var place = 1;
	var curr = l2.head;
	while(curr != null){
		num2 += place * curr.value;
		place *= 10;
		curr = curr.next;
	}
	
	// get total 
	total = num1 + num2;
	
	// return linked list of total in reverse order like the arguments 
	var totalString = "" + total;
	
	var newlist = new LinkedList();
	
	for(var i = totalString.length - 1; i >= 0; i--){
		newlist.addToTail( parseInt(totalString[i]) );
	}
	
	return newlist;
}


console.log("2.5 TESTS");
console.log("---------------");
var lst1 = new LinkedList();
lst1.addToTail(7);
lst1.addToTail(1);
lst1.addToTail(6);

var lst2 = new LinkedList();
lst2.addToTail(5);
lst2.addToTail(9);
lst2.addToTail(2);

(sumlists(lst1, lst2).printList()); // should be 2->1->9
console.log("\n");



// 2.7 intersection of two linked lists 
// determine if two linked lists intersect 
function intersect(l1, l2){
	
	var curr = l1.head;
	while(curr !== null){
		var curr2 = l2.head;
		while(curr2 !== null){
			if(curr == curr2){
				return true;
			}
			curr2 = curr2.next;
		}
		curr = curr.next;
	}
	return false;
}

var lst3 = new LinkedList();
var lst4 = new LinkedList();

var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(4);
var n5 = new Node(5);
var n6 = new Node(2);

console.log("2.7 TESTS");
console.log("---------------");

// 1->2->3
// 4->2->3 
// both lists intersect at 2 
n1.next = n2;
n4.next = n2;
n2.next = n3;

lst3.head = n1;
lst4.head = n4;
console.log("1->2->3 intersects with 4->2->3 : " + intersect(lst3, lst4));

// 1->2
// 4->5 
// no intersection
n1.next = n2;
n4.next = n5;
lst3.head = n1;
lst4.head = n4;
console.log("1->2 intersects with 4->5 : " + intersect(lst3, lst4));


// 1->2->3
// 4->2->5  - different 2!
// no intersection because different nodes with 2, even though same value 
n1.next = n2;
n2.next = n3;
n4.next = n6;
n6.next = n5;
lst3.head = n1;
lst4.head = n4;
console.log("1->2->3 intersects with 4->2'->5 : " + intersect(lst3, lst4));
console.log("\n");


// 2.8 loop detection 
// given a circular linked list, return the node at the beginning of the loop. 

function loopDetect(list){
	var seenList = [];
	var curr = list.head;
	while(curr !== null){
		if(seenList.indexOf(curr) >= 0){
			return curr;
		}
		seenList.push(curr);
		/*
		console.log("---------")
		for(var i = 0; i < seenList.length; i++){
			console.log(seenList[i])
		}
		*/
		curr = curr.next;
	}
}

var lst5 = new LinkedList();
var n1 = new Node('A');
var n2 = new Node('B');
var n3 = new Node('C');
var n4 = new Node('D');
var n5 = new Node('E');

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;
lst5.head = n1;

console.log("2.8 TESTS");
console.log("---------------");
console.log("A->B->C->D->E->C : " + loopDetect(lst5).value);




