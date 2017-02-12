# sortme 
A collection of sorting algorithms to be used in the browser or in NodeJS

## Installation

### node js :
`npm install sortme` 

then 

`var sortme = require('sortme')`

### browser :

download the source at `./build/sortme.js`

## Usage

### MergeSort

#### options

 - `autorun`    default : true
 - `watch`      default : false

 ```
{
    autorun : true,
    watch : false
}
 ```

#### methods

 - sort : sort the array
 - reverse : reverses the array
 - find : finds an element in the array, returns the index
 - findAll : finds all occurences of an element in the array, returns an array containing the indexes
 - printarr : print the array


#### example

```
var testArray = [5,1,8,7,2,9,3,0,4,6];

// Set to it doesn't sort the array on creation.
var mergeSort = new sortme.MergeSort(testArray, {autorun: false});

// manually start the sorting algorithm.
mergeSort.sort();

// testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```


More algorithms will be added.

## Happy sorting