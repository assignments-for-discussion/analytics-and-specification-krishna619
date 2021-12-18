require('assert');
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}
describe('Function returning NaN', function () {
 
});

module.exports = {average};
