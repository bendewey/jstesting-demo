/// <reference path="../bower_components/qunit/qunit/qunit.js"/>
/// <reference path="../scripts/calculator.js"/>

test("Calculator Add Test - Should add 2+3", function () {
    // Arrange
    expect(1);
    var expected = 5;

    // Act
    var actual = Calculator.add(2, 3);

    // Assert
    strictEqual(actual, expected, "2+3 should equal 5");
});