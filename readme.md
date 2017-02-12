# sortme 
Simple sorting library written in es6, available as NodeJS module and in browser.

## Installation

### node js :
`npm install sortme` 

then 

`var sortme = require('sortme')`

### browser :

download the source at `./build/sortme.js`

## Usage



```
var testArray = [5,1,8,7,2,9,3,0,4,6];

var mergeSort = new sortme.MergeSort(testArray);
mergeSort.Sort();

// testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

```