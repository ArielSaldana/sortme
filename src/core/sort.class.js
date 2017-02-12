export class Sort {
    
    constructor(toSort, config) {
        this.data = toSort;

        this._config = {
            autorun : true,
            watch : false
        }

        if (config)
            Object.assign(this._config, config);

        if (this._config.autorun)
            this.sort();


    }

    sort() { }

    isSorted() {

    }

    find() {

    }
}