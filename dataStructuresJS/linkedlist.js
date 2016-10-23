//a linked list data structure

function LinkedList(){

	//initial state
	this.head = null;
	this.tail = null;
	
	//add some methods
	//get the node the head is pointing to
	this.getHead = function(){
      	if(this.head === null){
          return null;
        }
		return this.head.data;
	}
	
	//get the node the tail is pointing to
	this.getTail = function(){
      	if(this.tail === null){
          return null;
        }
		return this.tail.data;
	}
	
	//add a node to the head
	this.addNodeToHead = function(data){
		var n = new Node(data);
		if(this.head === null){
			this.head = n;
			//make sure tail also points to new node
			this.tail = n;
		}else{
			n.next = this.head;
			this.head = n;
		}
	}
	
	//add a node to the tail
	this.addNodeToTail = function(data){
		var n = new Node(data);
		if(this.head === null){
			this.head = n;
		}else{
			this.tail.next = n;
		}
		this.tail = n;
	}
	 
	//insert a node AFTER a certain node with the passed data
	//will not work on adding to tail nodes
	//only adds once
	this.insertNode = function(target, data){
		var curr = this.head;
		var n = new Node(data);
		//then go through linked list
		while(curr !== null){
			//if we reach a node that has the target data
			if(curr.data === target){
				//insert the new node after the target node
				n.next = curr.next;
				curr.next = n;
				break;
			}
			curr = curr.next;
		}
	}
	
	//print the linked list
	this.printList = function(){
		var curr = this.head;
		var string = "";
		if(curr === null){
			string += "null";
			return string;
		}else{
			while(curr !== null){
				string += curr.data + " ";
				curr = curr.next;
			}
			return string;
		}
	}
	
}

function Node(data){
	this.data = data;
	this.next = null;
}


//TESTING
var a = new LinkedList();

a.addNodeToHead(1);
a.addNodeToTail(2);
a.addNodeToHead(5);
a.insertNode(1, 3);

console.log(a.printList());
//so list should look like "5, 1, 3, 2"

/*
console.log(a.getHead())
a.addNodeToHead("hey");
console.log(a.getHead())
a.addNodeToTail("hello");
console.log(a.getTail())
*/
