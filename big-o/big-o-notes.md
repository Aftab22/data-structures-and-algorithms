

# What is Good Code?

- **Readable**
	- others understand your code
- **Scalable**
	- Big O allows us to measure scalability of the code

  
Big O notation is a way to describe how the runtime of an algorithm changes as the size of the input data increases. It helps you understand the efficiency of an algorithm in terms of time or space.

Big O notation is a way to describe how the speed of an algorithm changes as the size of the input increases. It tells you how fast (or slow) an algorithm runs based on the size of the data it processes.


#     Why is Big O Important?


1.   Efficiency  : Helps you choose the best algorithm for your needs.

2.   Scalability  : Understand how your algorithm will perform as data grows.

3.   Comparison  : Easily compare the performance of different algorithms.

  

#     Key Concepts


1.   **Growth Rate**  : Big O focuses on the upper bound of the runtime or space, meaning how it behaves in the worst case as input size grows.

2.   **Input Size (n)**  : This usually refers to the number of elements in an input.


**Common Big O Notations**


-   **O(1)**  : Constant time – the algorithm takes the same time regardless of the input size.

-   **O(n)**  : Linear time – the time grows linearly with the input size.

-   **O(n^2)**  : Quadratic time – the time grows quadratically with the input size.

-   **O(log n)**  : Logarithmic time – the time grows logarithmically as the input size increases.

  
**Visualizing Big O**

  

Here's a simple representation of how these complexities grow as the input size (n) increases:

<!-- data-structures-and-algorithms\big-o\big-o-notation.png -->
  

**JavaScript Examples**
    
**1.   O(1)  :   Constant Time** 

   -   Example  : Accessing an array element by index.


  ```
 function getFirstElement(array) {

       return array[0]; // Takes the same time regardless of array size

   }
```

  
**2.   O(n)  :   Linear Time** 

   -   Example  : Finding an element in an array.

   ```
function findElement(array, target) {

       for (let i = 0; i < array.length; i++) {

           if (array[i] === target) return i; // Checks each element

       }

       return -1; // Not found

   }
```
  

**3.   O(n^2)  :   Quadratic Time** 

   -   Example  : Checking all pairs in an array.

   ```
function printPairs(array) {

       for (let i = 0; i < array.length; i++) {

           for (let j = 0; j < array.length; j++) {

               console.log(array[i], array[j]); // Nested loops

           }

       }

   }
```

  

  

**4.   O(log n)  :   Logarithmic Time** 

   -   Example  : Binary search in a sorted array.

  ```
function binarySearch(array, target) {

       let left = 0, right = array.length - 1;

  

       while (left <= right) {

           const mid = Math.floor((left + right) / 2);

           if (array[mid] === target) return mid; // Finds the target

           if (array[mid] < target) left = mid + 1;

           else right = mid - 1;

       }

       return -1; // Not found

   }
```
  

  

 **Tips to Quickly Identify Big O**

**1.   Look for Loops  :**

   -   Single Loop  : O(n)

   -   Nested Loops  : O(n^2)


**2.   Conditional Statements  :**

   - If you see an algorithm that divides the input (like in binary search), it may be O(log n).

**3.   Recursive Functions  :**

   - Analyze how many times the function calls itself and how the input size changes.


**4.   Data Structures  :**

   - Operations on arrays and lists are generally O(n), while operations on hash tables can be O(1) for lookups.

  

**5.   Ignore Constants**  : Focus on the highest order term. For example, O(2n) is simplified to O(n).


**Summary**

- Big O   helps you understand how the runtime of algorithms scales with input size.
    
- Common complexities are constant, linear, quadratic, and logarithmic.
    
- Choose algorithms with lower complexity for larger datasets to ensure better performance.
    

```
/**

* As the search list increases , the time taken to find an element also increases.

* As this leads to increased number of calculations.

* Time may change based on CPU performance. So this is not a correct way of finding whether an algorithm is good or not.

* This is where big O notation comes into picture.

* It is a way of measuring how good an algorithm is.

* In this case , as the input increases , the number of operations/computations/comparisions increases.

* Refer : data-structures-and-algorithms\big-o\big-o-complexity-chart.png

*/

  

function findElement() {

const elementToFind = 5;

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16];

// const myList = new Array(10000).fill(5);

const timeStart = performance.now();

for (i = 0; i <= myList.length; i++) {

if (myList[i] === 5) {

console.log("Element Found");

}

}

const timeEnd = performance.now();

const timeTaken = timeEnd - timeStart;

console.log(`Time taken : ${timeTaken.toFixed(2)} milliseconds`);

}

  

findElement();
```
  

