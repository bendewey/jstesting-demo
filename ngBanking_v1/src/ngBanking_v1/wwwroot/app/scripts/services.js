(function () {
    var app = angular.module('ngBanking');

    function GeneralLedger() {
        this.ledger = [];
    }
    GeneralLedger.prototype = {
        get balance() {
            var bal = 0;
            this.ledger.forEach(function (transaction) {
                bal += +transaction.amount;
            });
            return bal;
        },
        add: function (transaction) {
            this.ledger.push(transaction);
        }
    };

    app.service('GeneralLedger', GeneralLedger);

})();
