import { Sort } from '../core/sort.class';

export class MergeSort extends Sort {

    constructor(arr, config) {
        super(arr, config);
    }

    _merge(start, midPoint, end) {
        var firstHalf = [];
        var secondHalf = [];
        var arr = this.data;

        // fill first half
        for (var i = start; i <= midPoint; i++) {
            var obj = arr[i];
            firstHalf.push(obj);
        }

        // fill second half 
        for (var i = midPoint + 1; i <= end; i++) {
            var obj = arr[i];
            secondHalf.push(obj);
        }

        var arrayPointer = start;
        var firstArrayPointer = 0;
        var secondArrayPointer = 0;

        while (firstArrayPointer < firstHalf.length && secondArrayPointer < secondHalf.length) {

            if (this._config.key != null) {
                var firstArrayObj = firstHalf[firstArrayPointer][this._config.key];
                var secondArrayObj = secondHalf[secondArrayPointer][this._config.key];
            }

            else {
                var firstArrayObj = firstHalf[firstArrayPointer];
                var secondArrayObj = secondHalf[secondArrayPointer];
            }

            if (firstArrayObj <= secondArrayObj) {
                arr[arrayPointer] = firstHalf[firstArrayPointer];
                firstArrayPointer++;
            } else {
                arr[arrayPointer] = secondHalf[secondArrayPointer];
                secondArrayPointer++;
            }

            arrayPointer++;
        }

        while (firstArrayPointer < firstHalf.length) {
            arr[arrayPointer] = firstHalf[firstArrayPointer];
            firstArrayPointer++;
            arrayPointer++;
        }

        while (secondArrayPointer > secondHalf.length) {
            arr[arrayPointer] = secondHalf[secondArrayPointer];
            secondArrayPointer++;
            arrayPointer++;
        }
    }

    _mergeSort(start, end) {

        if (end > start) {
            var midPoint = Math.floor((start+end) / 2);

            this._mergeSort(start, midPoint);
            this._mergeSort(midPoint+1, end);
            this._merge(start, midPoint, end); 
        }
    }

    sort() {
        this._mergeSort(0, this.data.length-1);
        this.isSorted = true;
    }

}