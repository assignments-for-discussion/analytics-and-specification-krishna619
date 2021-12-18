var x=0;
var i=0;
var sum = 0;
function average(numbers) {
  for(i=0;i< (numbers.length){
     
    if(average[i]=='NaN'){
      x=x+1;
      continue;}
      sum = sum + average[i];
}
  if( numbers.length==0 || numbers.length == x)
      {
        return NaN;
  }
  return sum / (numbers.length - x);
}



module.exports = {average};
