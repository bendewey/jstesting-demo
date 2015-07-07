var Calculator;
(function (Calculator) {

    function add(left, right) {
        return left + right;
    }

    Calculator.add = add;
})(Calculator || (Calculator = {}));