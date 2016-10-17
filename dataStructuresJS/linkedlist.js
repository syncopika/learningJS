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
			n.next = head;
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
}

function Node(data){
	this.data = data;
	this.next = null;
}


//TESTING
var a = new LinkedList();

console.log(a.getHead())
a.addNodeToHead("hey");
console.log(a.getHead())
a.addNodeToTail("hello");
console.log(a.getTail())

