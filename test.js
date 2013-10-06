require('./index');
var arr = [1,2,3,4,5];
var emptyArr = [1,2,3,4,5];

module.exports = {
    empty: function (test) {
        test.equals(arr.isEmpty, false);
        emptyArr.clear();
        test.equals(emptyArr.length, 0);
        test.equals(emptyArr.isEmpty, true);
        test.done();
    },
    lastFirst: function (test) {
        test.equals(arr.first, 1);
        test.equals(arr.last, 5);
        arr.first = -1;
        arr.last = 10;
        test.equals(arr[0], -1);
        test.equals(arr[arr.length-1], 10);
        test.equals(emptyArr.first, null);
        test.equals(emptyArr.last, null);
        test.done();
    },
    contains: function (test) {
        test.equals(arr.contains(3), true);
        test.equals(arr.contains(6), false);
        test.done();
    }
};
