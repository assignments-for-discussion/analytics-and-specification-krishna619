require('assert');
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}
describe('Function returning NaN', function () {
  it('shall return NaN', function () {
    assert.equal(isNaN(average()), false); // AssertionError: NaN == NaN
    assert.notEqual(isNaN(average()), true); // No AssertionError
  });
});

module.exports = {average};
