//implementation of the stack data type
//rememebr that a STACK is FILO
//that is, "first in, last out"

//when removing elements, is it okay to just replace with 0? 
//if I wanted to resize the array, I think it would cause the pop()
//operation to be O(n) then, I think, which kinda defeats the
//advantage of the pop function being O(1). 
//this is interesting: http://stackoverflow.com/questions/22614237/javascript-runtime-complexity-of-array-functions

//also note: in other languages like Java, the arrays are not as flexible as in Javascript.
//so when pushing to an array in other languages, there is a finite size. therefore when
//the stack reaches max length, it needs to be resized (preferably twice the current length
//for better time-complexity/big O).

function Stack(){

	//use an array to hold the data
	var theStack = [];
  //keep track of which index to store/remove
	var counter = 0;
	
	//push function
	this.push = function(data){
		theStack[counter] = data;
		counter++;
	}

	//pop function
	this.pop = function(){
		if(counter >= 0){
			counter--;
			//get the last item stored in the array
			var lastItem = theStack[counter];
			//remove the item
			theStack[counter] = 0;
			return lastItem;
		}else{
			return "nothing to pop";
		}
	}
	
	this.showStack = function(){
		return theStack;
	}

}

//tests
var stack1 = new Stack();

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.showStack());

console.log(stack1.pop()); //3
console.log(stack1.pop()); //2
console.log(stack1.pop()); //1

stack1.push(5);
console.log(stack1.showStack());
console.log(stack1.pop()); //5
console.log(stack1.showStack());

