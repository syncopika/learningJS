#data structures using Javascript    

you can run these with node.js! after installing node, just open up the command-line, make sure you're in the directory with the right .js file (i.e. linkedlist.js), and then type in "node [filename].js" in the command-line (where [filename] is like linkedlist, or stack, etc).
    
additionally, I think these are mostly functional, but not completely bug-free currently. they should satisfy most general cases at least though I think.    

since I'm learning about data structures right now, I thought it would be fun to implement these.

##1. linked list
    a linked list has nodes and each node points to another one. 
    
    benefits: O(1) for inserting/deleting at head/tail pointers. no need to resize anything (i.e. with arrays).
    drawbacks: no random access/indexing, O(n) for inserting within the list. 
    
##2. stack
    follows a "first in, last out" approach. 
    
    benefits:
    drawbacks:

##3. queue
    follows a "first in, first out" approach.
    
    benefits: useful for breadth-first traversal in a tree. 
    drawbacks:

##4. heap
    a type of binary tree that can order elements by smallest or largest.
    
    benefits: useful for getting the smallest or largest element, can be used for sorting (HeapSort)
    drawbacks: 
    
##5. binary search tree    
    a binary tree in which each node's left subtree nodes are smaller than that node's value, 
    and each node's right subtree is larger. also, each node's value should be comparable.    
        
    useful for sorting (i.e. treesort), because the tree can be traversed in-order 
    (left node, parent node, right node) to produce the nodes in sorted order.

##6. weighted graph    
    a graph is a set of vertices. since this one is weighted, it means that for any connection between two vertices, there is a weight (positive integer) associated with that connection (also called an 'edge').    
        
    benefits: good for finding paths. shortest-path using Dijkstra's Algorithm.
