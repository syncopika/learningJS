// 3.1
// how can you use a single array to implement 3 stacks?
// make the array have a size that is a multiple of 3 first. 
// the first 3 indices, i.e. 0, 1, and 2, will indicate the start of the 3 stacks.
/*
start @ 0 = stack 1
start @ 1 = stack 2
start @ 2 = stack 3

--------------------------------------------
1	|2	|3	|1	|2	|3	|1	|2	|3	|1	|2 ...
--------------------------------------------
 ^           ^           ^           ^

 ^ => stack 1

maintain 3 pointers for each stack.  
keep track of size for each stack too. 

*/

function threeStacks(){
	
	this.stack = [];
	this.stack1size = 0;
	this.stack2size = 0;
	this.stack3side = 0;
	this.stack1Index = 0;
	this.stack2Index = 1;
	this.stack3Index = 2;
	
	this.push = function(stackNum, val){
		if(stackNum === 1){
			this.stack[this.stack1Index] = val;
			this.stack1Index += 3;
			this.stack1size++;
		}else if(stackNum === 2){
			this.stack[this.stack2Index] = val;
			this.stack2Index += 3;
			this.stack2size++;
		}else if(stackNum === 3){
			this.stack[this.stack3Index] = val;
			this.stack3Index += 3;
			this.stack3size++;
		}
	}
	
	this.pop = function(stackNum){
		//console.log(this.stack);
		var temp;
		if(stackNum === 1){
			if(this.stack1size === 0){
				return null;
			}
			this.stack1Index -= 3;
			temp = this.stack[this.stack1Index];
			this.stack[this.stack1Index] = null;
			this.stack1size--;
		}else if(stackNum === 2){
			if(this.stack2size === 0){
				return null;
			}
			this.stack2Index -= 3;
			temp = this.stack[this.stack2Index];
			this.stack[this.stack2Index] = null;
			this.stack2size--;
		}else{
			if(this.stack3size === 0){
				return null;
			}
			this.stack3Index -= 3;
			temp = this.stack[this.stack3Index];
			this.stack[this.stack3Index] = null;
			this.stack3size--;
		}
		return temp;
	}
	
	this.peek = function(stackNum){
		if(stackNum === 1){
			if(this.stack1size === 0){
				return null;
			}
			return this.stack[this.stack1Index - 3];
		}else if(stackNum === 2){
			if(this.stack2size === 0){
				return null;
			}
			return this.stack[this.stack2Index - 3];
		}else{
			if(this.stack3size === 0){
				return null;
			}
			return this.stack[this.stack3Index - 3];
		}
	}
}

// check 
var newStack = new threeStacks();
newStack.push(1, 2);
newStack.push(1, 3);
newStack.push(1, 5);
newStack.push(2, 10);
newStack.push(2, 15);
newStack.push(3, 100);
newStack.push(3, 130);
newStack.push(3, 150);
newStack.push(3, 180);

console.log(newStack.pop(3)); // 180
console.log(newStack.pop(2)); // 15
console.log(newStack.pop(1)); // 5
console.log(newStack.pop(2)); // 10
console.log(newStack.pop(2)); // null
console.log(newStack.peek(3)); // 150


// 3.2 min stack 
// design a stack that has a function min that returns the minimum element.
// one approach is to keep a separate stack that keeps track of the minimums
// whenever a new minimum is added. 


// 3.3 Stack of Plates 
// you can keep an array of stacks.


// 3.4 Queue via Stacks
// use 2 stacks. keep filling 1 stack like normal when queuing (i.e. push)
// when dequeue() is called, push all the contents of the filled stack to the other stack. then call pop on that stack.
// after, don't forget to push that stack's contents back to the first stack. 


// 3.5 Sort Stack
// use 2 stacks to sort. 1 has the stuff you want to sort (call it stack1), the other is empty (call it stack2). 

// while the filled stack is not yet empty,
// call pop() on stack1, put in temporary variable, temp.

// check! is there anything in the stack2? if not, push temp to that stack. if there are elements, then
// check! while there's stuff in the stack2 AND the current top element (use peek() to check) is GREATER THAN
// temp, call pop() on stack2, and put that element back onto stack1. push temp in stack2. 

// why do we do this inner while loop? because you want stack2 to have all the bigger elements on the top and the smaller
// ones on the bottom. the inner loops looks through all the elements bigger than temp and puts them in stack1, allowing for temp to 
// put in the right place in stack2. 

// when the outer loop is done, you can then pop and push everything from stack2 to stack1 to get stack1 have all the
// elements go from smaller to bigger. 

// example
/*
1.											2.														
	---------		---------				---------		---------								
	|	5	|		|		|				|		|		|		|
	---------		---------				---------		---------
	|	2	|  => 	|		|				|	2	|  => 	|		|
	---------		---------				---------		---------	
	|	4	|		|		|				|	4	|		|		|
	---------		---------				---------		---------	
	|	3	|		|		|				|	3	|		|	5	|
	----------		---------				----------		---------
                                            since stack2 was empty, 5 just gets pushed to stack2.

	3.										4.														
	---------		---------				---------		---------								
	|		|		|		|				|		|		|		|
	---------		---------				---------		---------
	|	5	|  => 	|		|				|		|  => 	|		|
	---------		---------				---------		---------	
	|	4	|		|		|				|	4	|		|	5	|
	---------		---------				---------		---------	
	|	3	|		|	2	|				|	3	|		|	2	|
	----------		---------				----------		---------
    temp = 2;								2 is not bigger than 5, quit inner loop.
	there's only 1 element                  put 5 on stack2.
	to check in stack2.
	5 > 2, so put 5 back on stack1.
	put temp, which is 2, on stack2.
	
	5.										6.														
	---------		---------				---------		---------								
	|		|		|		|				|		|		|		|
	---------		---------				---------		---------
	|		|  => 	|		|				|		|  => 	|	5	|
	---------		---------				---------		---------	
	|	5	|		|	4	|				|		|		|	4	|
	---------		---------				---------		---------	
	|	3	|		|	2	|				|	3	|		|	2	|
	----------		---------				----------		---------
	temp = 4;                                temp = 5;
	5 > 4, put 5 on stack1.                  4 < 5, so 5 goes on stack2.
	2 is not bigger than 4, 
	so don't do anything to 2. 
	4 goes on stack2.
	
	7.										8.														
	---------		---------				---------		---------								
	|		|		|		|				|		|		|	5	|
	---------		---------				---------		---------
	|		|  => 	|		|				|		|  => 	|	4	|
	---------		---------				---------		---------	
	|	4	|		|	3	|				|		|		|	3	|
	---------		---------				---------		---------	
	|	5	|		|	2	|				|		|		|	2	|
	----------		---------				----------		---------
	temp = 3;								awesome! this is what we want.
	5 > 3, so put 5 on stack1.				now just pop and push stack2 back to stack1
	then peek at stack2 again.              and it should be smaller to larger, top to bottom.
	4 > 3 also, so push 4 onto stack1.
	2 is not larger than 3, so stop there. 
	then put 3 on stack2.
	
*/



