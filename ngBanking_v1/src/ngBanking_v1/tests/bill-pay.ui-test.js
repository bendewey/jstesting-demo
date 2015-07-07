describe('bill pay', function() {
  it('should deduct from our balance', function() {
    // arrange
    browser.get('http://localhost:8080');
    element(by.model('billTo')).sendKeys('some company');
    element(by.model('billAmount')).sendKeys('100');

    // act
    element(by.buttonText("Pay Bill")).click();

    // assert
    var balanceElement = element(by.binding('balance()'));
    expect(balanceElement.getText()).toEqual("($100.00)");
  });
});