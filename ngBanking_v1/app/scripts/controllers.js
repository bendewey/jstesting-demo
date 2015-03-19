(function () {
    var app = angular.module('ngBanking');

    app.controller('accountCtrl', function ($scope, GeneralLedger) {

        var vm = $scope;

        vm.newDescription = '';
        vm.newAmount = '';
        vm.billTo = '';
        vm.billAmount = '';
        vm.ledger = GeneralLedger.ledger;

        vm.balance = function () {
            return GeneralLedger.balance;
        };

        vm.addTransaction = function () {
            var item = {
                description: vm.newDescription,
                amount: vm.newAmount
            };
            GeneralLedger.add(item);
            vm.newDescription = '';
            vm.newAmount = '';
        };

        vm.payBill = function () {
            var item = {
                description: vm.billTo,
                amount: -vm.billAmount
            };
            GeneralLedger.add(item);
            vm.billTo = '';
            vm.billAmount = '';
        };
    });

})();
