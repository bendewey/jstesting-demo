
describe('GeneralLedger', function () {
    beforeEach(module('ngBanking'));

    var GeneralLedger;
    beforeEach(inject(function (_GeneralLedger_) {
        // arrange
        GeneralLedger = _GeneralLedger_;
        var item1 = { description: 'item1', amount: 111 };
        var item2 = { description: 'item2', amount: 222 };

        // act
        GeneralLedger.add(item1);
        GeneralLedger.add(item2);
    }));

    it('should add to item to Ledger', function () {
        //assert
        expect(GeneralLedger.ledger.length).toBe(2);
    });

    it('should sum balance of ledger items', inject(function (GeneralLedger) {
        //assert
        expect(GeneralLedger.balance).toBe(333);
    }));
});