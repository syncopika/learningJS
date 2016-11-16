//queue data structure
//queues are FIFO (first in, first out)

//linked list version
//for queues using a linked list, add to the tail and remove at the head
//if we add the other way around (add to the head), it will cost more time
//to reassign the tail when using dequeue because traversing the whole list
//will be necessary.

function queueLinkedList(){

	this.head = null;
	this.tail = null;

	this.dequeue = function(){
		//get the current head
		var n = this.head;
		
		//reassign head
		this.head = n.next;

		//return the former head data
		return n.data;
	}
	
	this.enqueue = function(data){
	
		var n = new Node(data);
		
		//if adding data for the first time
		if(this.head === null && this.tail === null){
			this.head = n;
			this.tail = n;
			return;
		}
		//for all other times
		this.tail.next = n; //connect current tail node to new node
		this.tail = n; //reassign tail to this new node
		
	}
	
	this.getSize = function(){
		var count = 0;
		var curr = this.head;
		while(curr !== null){
			count++;
			curr = curr.next;
		}
		return count;
	}
	
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

//node for the queue linked list
function Node(data){
	this.data = data;
	this.next = null;
}


//testing
var q = new queueLinkedList();
q.enqueue("hey");
q.enqueue("hello");
q.enqueue("hi");
q.enqueue("yo");
console.log(q.printList());
console.log("size of queue: " + q.getSize()); //should return 4
console.log(q.dequeue()); //should return "hey"
console.log(q.printList());
console.log("size of queue: " + q.getSize()); //should now return 3
