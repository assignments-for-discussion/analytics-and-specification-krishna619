const assert = require("assert");
var number2;
function average(numbers) {
    number2 = numbers;
    return numbers.reduce((p, c) => p + c, 0) / numbers.length;
}
describe('Function returning NaN', function() {
            it('shall return NaN', function() {

                    assert.equal(isNaN(average(number2)), true); // No AssertionError
                    assert.notEqual(isNaN(average(number2)), false); // No AssertionError

                    });
            });
module.exports = {average};
