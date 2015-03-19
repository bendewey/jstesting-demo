(function(undefined) {
    var app = angular.module('ngBanking');

app.controller('accountCtrl', ['$scope', 'GeneralLedger', function($scope, generalLedger) {
	
    var vm = this;
	
	vm.newDescription = '';
	vm.newAmount = '';
	vm.billTo = '';
	vm.billAmount = '';
    vm.ledger = generalLedger.ledger;
    
	vm.balance = function() {
	    return generalLedger.balance;
	};
	
	vm.addTransaction = function() {
	    if ($scope.deposit.$valid) {
	        var item = {
	            description: vm.newDescription,
	            amount: vm.newAmount
	        };
	        generalLedger.add(item);
	        vm.newDescription = '';
	        vm.newAmount = '';
	        $scope.deposit.$setUntouched();
	    }
	};
	
	vm.payBill = function() {
        if ($scope.billPay.$valid) {
            var item = {
                description: vm.billTo,
                amount: -vm.billAmount
            };
            generalLedger.add(item);
            vm.billTo = '';
            vm.billAmount = '';
            $scope.billPay.$setUntouched();
        }
	};
}]);

})();
