var x = 0;
var i = 0;
var sum=0;

function average(numbers) 
{
    for (i = 0; i < numbers.length; i++) 
    {
        
        if (isNaN(numbers[i]))
        {
            
            numbers[i] = 0;
            x = x + 1;
        }    
        } 
        sum = sum + numbers[i];
    }
        
        return sum / (numbers.length - x);
}

module.exports = {average};
