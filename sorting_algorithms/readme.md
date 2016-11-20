sorting algorithms
-----------------
1. <b>bubble sort</b>    
Each element (let's call it 'a') in the data set is checked against every other element in the set (let's call them 'b'), such that if 'a' is less than 'b' (this is for getting ascending order), 'a' is swapped with 'b'. Therefore we have a nested for-loop. This sorting algorithm has a worst-case runtime of O(n^2).    

2. <b>selection sort</b>    
Each element is compared to every element to its right and the swap only occurs with the SMALLEST element available to the right of the current element selected. THis requires a nested for-loop again, and each loop's runtime is dependent on the size of the data, so worst-case runtime is O(n^2). 

3. <b>merge sort </b>   
A helper merge function takes two already sorted arrays (this is an important detail!) and puts their elements in order in a new array. 
The merge sort function itself takes a data set, splits it into a left and right half, calls the merge sort function on the left and right half (this is where recursion comes in), and finally calls the helper merge function, taking the left and right halves as parameters.<br><br>
The first time the mergeSort is run, the recursive calls keep dividing the original data set so that each element ends up in their own array. Then they are paired up and merged via the merge helper function. This keeps going so that the individual arrays recombine and build back up the original data set, but in sorted order.    
<br>
This algorithm has a worst-case runtime of O(n*log(n)).    
    
4. <b>quick sort</b>    
A helper method takes in the data set, a starting index, and ending index as parameters. A 'pivot' element is picked (for my implementation I just used the leftmost element - I am told that in the industry, there are better ways to pick a pivot). Then there is a 'partition' step - the data set is rearranged so that all the elements smaller than the 'pivot' are put before the 'pivot', and all the elements larger than the 'pivot' are placed after.    
<br>
This step is done by starting at the second element (leave the 'pivot' alone for now), and checking if the next element is smaller. If so, a marker, which begins at 'start', is incremented by 1, and the element at the index of the marker is swapped with the current element being looked at. If the next element is larger, nothing happens, which allows for the marker to keep track of a previous element, which can be swapped with a smaller element, if found, later on in the data set. This way smaller elements end up in the front of the data set, and larger ones towards the end. The marker, when all is done, indicates where the 'pivot' should go.    
<br>
Next, after the data set has been rearranged and partitioned, two recursive calls to the helper method are made. One call passes in the data set and only looks at elements from the beginning of the array up to where the index of the element before the 'pivot'. THe second recursive call has its 'start' index begin at the first element after the 'pivot' and looks at the elements to the end of the data set. <br>    
This algorithm has a best-case runtime of O(n*log(n)) and worst-case runtime of O(n^2). The worst case is O(n^2) because of the dependency on the pivot. Ideally, in the best case, the pivot would always be in the middle. Therefore, the sorting process should resemble a complete binary tree, where the height is log(n). But in the worst case, the pivot would be close to one end of the data set and the height would end up being proportional to the size of the data set.  
