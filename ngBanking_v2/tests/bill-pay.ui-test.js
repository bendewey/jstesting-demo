describe('billPay', function() {
    it('should pay bill', function () {
    // arrange
    browser.get('http://localhost:8080');
    browser.executeScript('sessionStorage.clear();');
    browser.refresh();
    element(by.model('vm.billTo')).sendKeys('some company');
    element(by.model('vm.billAmount')).sendKeys('100');

    // act
    element(by.buttonText("Pay Bill")).click();

    // assert
    var balanceElement = element(by.binding('vm.balance()'));
    expect(balanceElement.getText()).toEqual("($100.00)");
  });
});