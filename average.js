const assert = require("assert");
var x=0;
var i=0;
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0) / (numbers.length - x);
}
for(i=0;i<numbers.length;i++){
  if(average[i]=='NaN'){
    x=x+1;
    continue;
  }
}


module.exports = {average};
