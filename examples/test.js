var sortme = require('../build/sortme.js');

var numarr = [6, 2, 9, 5, 7, 1, 9, 3, 8, 9, 9, 3]

var ms = new sortme.MergeSort(numarr, {autorun : true});
// ms.reverse();
console.log(numarr);
console.log(ms.findAll(3));