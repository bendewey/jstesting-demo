
describe('billPay', function () {
    var scope, vm;
    var mockLedger = {};
    var $provide;

    beforeEach(module('ngBanking', 'ngBankingViews'));
    beforeEach(module(function (_$provide_) {
        $provide = _$provide_;
        sessionStorage.clear();
    }));
    
    beforeEach(inject(function ($controller, $rootScope, $compile, $templateCache, GeneralLedger) {
        
        mockLedger = GeneralLedger;
        spyOn(mockLedger, 'add').and.callThrough();
        $provide.service('GeneralLedger', function () {
            return mockLedger;
        });

        var parentScope = $rootScope.$new();
        var templateHtml = $templateCache.get('app/views/main.html');
        var element = angular.element("<div>" + templateHtml + "</div>");
	    $compile(element)(parentScope);
	    scope = parentScope.$$childHead;
	    vm = scope.vm;
	    scope.$apply();
    }));

    it('should call add on general ledger', function () {
        // arrange
        scope.billPay.billToCompany.$setViewValue("some company");
        scope.billPay.billToAmount.$setViewValue('100');
        scope.$digest();

        // act
        vm.payBill();

        //assert
        expect(mockLedger.add).toHaveBeenCalled();
    });

	it('should fail when paying a negative bill', function () {
	    // arrange
	    scope.billPay.billToCompany.$setViewValue("some company");
		scope.billPay.billToAmount.$setViewValue('-100');
		scope.$digest();

	    // act
	    vm.payBill();

	    //assert
	    expect(scope.billPay.billToAmount.$error.pattern).toBeTruthy();
	});
});