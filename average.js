const assert = require("assert");
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  describe('Function returning NaN', average(numbers) {
  it('shall return NaN', average(numbers) {
    assert.notEqual(isNaN(average(numbers)), true); // No AssertionError
  });
});
}




module.exports = {average};
