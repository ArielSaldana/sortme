var sortme = require('../build/sortme.js');

var numarr = [6, 2, 9, 5, 7, 1, 9, 3, 8, 9, 9, 3]

var ms = new sortme.MergeSort(numarr, {autorun : true});
console.log(numarr);
console.log(ms.findAll(3));


var objArr = [ {x:6}, {x:2}, {x:9}, {x:5}, {x:7}, {x:1}, {x:9}, {x:3}, {x:8}, {x:8}, {x:9} ];

var ms = new sortme.MergeSort(objArr, {key:'x'});

console.log(objArr);
console.log(ms.findAll(5));
