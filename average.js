require('assert');
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}
describe('Function returning NaN', average(numbers) {
  it('shall return NaN', average(numbers) {
    assert.equal(isNaN(functionUnderTest()), false); // AssertionError: NaN == NaN
    assert.notEqual(isNaN(functionUnderTest()), true); // No AssertionError
  });
});

module.exports = {average};
