(function () {
    var app = angular.module('ngBanking');

    function GeneralLedger() {
        var ledgerJson = sessionStorage.getItem('ledger');
        this.ledger = ledgerJson ? JSON.parse(ledgerJson) : [];
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
            sessionStorage.setItem('ledger', JSON.stringify(this.ledger));
        }
    };

    app.service('GeneralLedger', GeneralLedger);

})();
