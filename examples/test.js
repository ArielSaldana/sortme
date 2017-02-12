var sortme = require('../build/sortme.js');

// sort numbers
var numarr = [6, 2, 9, 5, 7, 1, 9, 3, 8, 9, 9, 3]

var ms = new sortme.MergeSort(numarr, {autorun : true});

// sort an object
var objArr = [
    {
        name : 'Mahum Fatma',
        firstName : 'Mahum',
        lastName : 'Fatma',
        id : 5
    },
    {
        name : 'Ariel Saldana',
        firstName : 'Ariel',
        lastName : 'Saldana',
        id : 1
    },
    {
        name : 'Sayma Fatima',
        firstName : 'Sayma',
        lastName : 'Fatima',
        id : 2
    },
    {
        name : 'Whosan Ali',
        firstName : 'Whosan',
        lastName : 'Ali',
        id : 3
    },
    {
        name : 'Gabriel Rivera',
        firstName : 'Gabriel',
        lastName : 'Rivera',
        id : 4
    },
];

var ms = new sortme.MergeSort(objArr, {key:'lastName'});
console.log(objArr[ms.find('Fatma')].firstName);
