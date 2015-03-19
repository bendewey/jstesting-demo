// helpers
var pages = {
    billPay: {
        payBill: function(companyName, amount) {
            element(by.model('vm.billTo')).sendKeys(companyName);
            element(by.model('vm.billAmount')).sendKeys(amount);

            element(by.buttonText("Pay Bill")).click();
        },
        balance: function() {
            return element(by.binding('vm.balance()')).getText();
        }
    }
}



describe('billPay2', function () {
  it('should pay bill', function() {
    // arrange
    browser.get('http://localhost:8080');
    browser.executeScript('sessionStorage.clear();');
    browser.refresh();

    // act
    pages.billPay.payBill("some company", 100);

    // assert
    expect(pages.billPay.balance()).toEqual("($100.00)");
  });
});