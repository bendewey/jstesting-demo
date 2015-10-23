
describe('billPay', function () {
    beforeEach(module('ngBanking'));

    var mockLedger = {};
    var scope;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mockLedger.add = jasmine.createSpy('add');
        $controller('accountCtrl', {
            $scope: scope,
            GeneralLedger: mockLedger
        });
    }));

    it('should add to General Ledger', function () {
        // arrange
        scope.billTo = "Some company";
        scope.billAmount = 100;

        // act
        scope.payBill();

        //assert
        expect(mockLedger.add).toHaveBeenCalled();
    });

    it('should reset', function () {
        // arrange
        scope.billTo = "Some company";
        scope.billAmount = 100;

        // act
        scope.payBill();

        //assert
        expect(scope.billTo).toBe('');
    });
});