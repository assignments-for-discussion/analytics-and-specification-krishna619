
var x = 0;
var i = 0;
var sum=0;

function average(numbers) 
{
    for (i = 0; i < numbers.length; i++) 
    {
        if (isNaN(numbers[i]))
        {
            continue;
        }   
        sum = sum + numbers[i];
        x = x + 1;
        
        
        
    }
    if(x < 1)
    {
        x=1;
    }
        return sum /x;
}

module.exports = {average};
