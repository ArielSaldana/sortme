export class Sort {
    
    constructor(toSort, config) {
        this.data = toSort;

        this.isSorted = false;

        this._config = {
            autorun : true,
            watch : false,
            key : null,
            copy : false
        }

        if (config)
            Object.assign(this._config, config);

        if (this._config.autorun)
            this.sort();
    }

    sort() { }

    swap(arr, i, i2) {
        var temp = arr[i];

        arr[i] = arr[i2];
        arr[i2] = temp;
    }

    reverse() {
        var midPoint = Math.floor(this.data.length/2);
        // var startingPointer = 0;
        // var endingPointer = this.data.length -1;

        for ( var i = 0; i < midPoint; i++) {
            this.swap(this.data, i, this.data.length - 1 - i);
            
        }
    }

    _find(searchKey, start, end) {

            var midPoint = Math.floor(((start+end)/2));

            if (this._config.key)
                var num = this.data[midPoint][this._config.key];
            else
                var num = this.data[midPoint];

            if ( start >= end) {
                return null;
            }

            if (searchKey < num) {
                return this._find(searchKey, start, midPoint)
            }
            else if (searchKey > num) {
                return this._find(searchKey, midPoint+1, end);
            }
            else if (num === searchKey) {
                return midPoint;
            }
    }

    find(searchKey) {
        // binary search style
        return this._find(searchKey, 0, this.data.length);
    }

    findAll(searchKey) {
        var index = this._find(searchKey, 0, this.data.length);

        if (index === null)
        return null;

        var indexes = [];

        for (var i = index-1; i >= 0; i--) {
            if ( this.data[i] === searchKey)
                indexes.push(i);
            else 
                break;
        }

        indexes.push(index);

        for (var i = index+1; i < this.data.length; i++) {
            if ( this.data[i] === searchKey)
                indexes.push(i);
            else 
                break;
        }

        return indexes;
    }

    getArr() {
        return this.data;
    }

    printArr() {
        console.log(this.data);
    }
}