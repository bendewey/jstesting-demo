(function () {
    angular.module('ngBankingTestHelpers', [])
        .factory('mockingHelpers', mockingHelpers)
        .factory('controllerHelpers', controllerHelpers);

    function mockingHelpers() {

        return {
            getGeneralLedgerPassthrough: function ($provide) {
                sessionStorage.clear();
                var mockLedger;
                inject(function (GeneralLedger) {
                    mockLedger = GeneralLedger;  
                });
                spyOn(mockLedger, 'add').and.callThrough();
                $provide.service('GeneralLedger', function () {
                    return mockLedger;
                });
                return mockLedger;
            }
        };
    }

    controllerHelpers.$inject = ['$controller', '$rootScope', '$compile', '$templateCache'];
    function controllerHelpers($controller, $rootScope, $compile, $templateCache) {
        
        return {
            accountCtrl: {
                create: function () {
                    var parentScope = $rootScope.$new();
                    var templateHtml = $templateCache.get('app/views/main.html');
                    var element = angular.element("<div>" + templateHtml + "</div>");
                    $compile(element)(parentScope);
                    var scope = parentScope.$$childHead;
                    scope.$apply();
                    return scope;
                },
                deposit: function(scope, memo, amount) {
                    scope.deposit.memo.$setViewValue(memo);
                    scope.deposit.amount.$setViewValue(amount);
                    scope.$digest();
                    scope.vm.addTransaction();
                },
                payBill: function (scope, billTo, billAmount) {
                    scope.billPay.billToCompany.$setViewValue(billTo);
                    scope.billPay.billToAmount.$setViewValue(billAmount);
                    scope.$digest();
                    scope.vm.payBill();
                },
                createWithInitialDeposit: function(memo, amount) {
                    var scope = this.create();
                    this.deposit(scope, memo, amount);
                    return scope;
                }
            }
        };
    };
})();


describe('billPay', function () {
    var $provide;
    beforeEach(module('ngBanking', 'ngBankingViews', 'ngBankingTestHelpers'));
    beforeEach(module(function(_$provide_) {
        $provide = _$provide_;
    }));
    
    it('NEW2 should call add on general ledger', inject(function (mockingHelpers, controllerHelpers) {
        // arrange
        var mockLedger = mockingHelpers.getGeneralLedgerPassthrough($provide);
        var scope = controllerHelpers.accountCtrl.create();

        // act
        controllerHelpers.accountCtrl.payBill(scope, "ACME Company", 100);

        //assert
        expect(mockLedger.add).toHaveBeenCalled();
    }));

    it('should fail when paying a negative bill', inject(function (mockingHelpers, controllerHelpers) {
	    // arrange
	    var scope = controllerHelpers.accountCtrl.create();
		
	    // act
	    controllerHelpers.accountCtrl.payBill(scope, "ACME Company", -100);

	    //assert
	    expect(scope.billPay.billToAmount.$error.pattern).toBeTruthy();
	}));
});