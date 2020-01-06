# Array-sorting

## Description

Three basic methods for sorting an array were implemented. Such as Bubble sort, insertion sort and merge sort.
A performance test was performed for all three methods.

## About sorting methods

### Bubble

Sorting is carried out by exhaustive search, pairwise comparison of elements.
When passing elements of the inner cycle, it is compared with the element of the outer cycle.
If the elements are in the wrong order, they are swapped. The number of iterations reaches O(n^2).

### Insertion

The algorithm is that each subsequent element is compared with previous elements.
Then he finds his place and stands on it. The advantage is that the element does not require comparison with all others.
When an element has become in its place, the cycle goes on to the next.  The number of iterations reaches O(n^2).

### Merge

Sorting is done by breaking the task into subtasks.
An array is recursively split into many subarrays that are sorted separately.
When merging an array, its sorted parts are also sorted. The number of iterations reaches O(n log2 n).

## Performance test

The test was performed for arrays of 30,000 and 50,000 elements.
The test results on my computer are as follows:

<img src='https://raw.githubusercontent.com/DmytVan/Array-sorting/master/img/sortTest.jpg' alt='test result'>

The slowest sorting method was the bubble sorting method.
This method is effective only for small arrays and is not used in modern times in practice.

The most effective solution was the merge sort algorithm.
This is achieved by dividing the task into many simple subtasks.
The combined solution of these subtasks gives the correct sorting result.
