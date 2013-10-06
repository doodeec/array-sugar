(function (arrProt) {
    var props = {
        first: {
            get: function() {
                return this[0];
            },
            set: function(val) {
                return this[0] = val;
            }
        },
        last: {
            get: function() {
                return this[this.length - 1];
            },
            set: function(val) {
                return this[this.length - 1] = val;
            }
        },
        isEmpty: {
            get: function() {
                return this.length === 0;
            },
            set: undefined
        }
    };

    var methods = {
        /**
         * @param {*} val
         * @returns {boolean}
         */
        contains: function (val) {
            return this.indexOf(val) != -1;
        },
        /**
         * will erase the array and leave it empty
         */
        clear: function () {
            this.length = 0;
        }
    };

    for(var prop in props){
        if (!arrProt.hasOwnProperty(prop)) {
            Object.defineProperty(Array.prototype, prop, {
                enumerable: false,
                configurable: false,
                set: props[prop].set,
                get: props[prop].get
            });
        }
    }
    for(var m in methods){
        if (!arrProt.hasOwnProperty(m)) {
            Object.defineProperty(Array.prototype, m, {
                enumerable: false,
                configurable: false,
                value: methods[m],
                writable: false
            });
        }
    }
})(Array.prototype);