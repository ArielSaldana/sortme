# sortme 
A collection of sorting algorithms to be used in the browser or in NodeJS to sort strings, numbers, or objects.

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
 - `key`        default : null (when trying to sort an object, you pass a key in the object that is used as an identifier)
  

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
console.log(testArray);

// prints [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

When sorting objects, you will need to pass a key identifier in the config parameter

```
var objArr = [ {x:6}, {x:2}, {x:9}, {x:5}, {x:7}, {x:1}, {x:9}, {x:3}, {x:8}, {x:8}, {x:9} ];

var ms = new sortme.MergeSort(objArr, {key:'x'});
console.log(objArr);

// prints [ { x: 1 }, { x: 2 }, { x: 3 }, { x: 5 }, { x: 6 }, { x: 7 }, { x: 8 }, { x: 8 }, { x: 9 }, { x: 9 }, { x: 9 } ]
```


More algorithms will be added.

## Happy sorting