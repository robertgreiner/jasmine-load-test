var Utils = function() {}

Utils.prototype.getInt = function() {
    return 5;
}

Utils.prototype.returnTrue = function() {
    return true;
}

Utils.prototype.returnFalse = function() {
    return false;
}

Utils.prototype.returnZero = function() {
    return 0;
}

Utils.prototype.getString = function() {
    return 'Able was I ere I saw Elba';
}

Utils.prototype.simulateAnAlgorithmicallyComplexFunction = function() {
    var total = 0;
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            total += i + j;
        }
    }
}