const assert = require("assert");

function average(numbers) {
    describe('Function returning NaN', function() {
        it('shall return NaN', function() {
            assert.notEqual(isNaN(average(numbers)), true); // No AssertionError
        });
    });
    return numbers.reduce((p, c) => p + c, 0) / numbers.length;

}




module.exports = {average};
