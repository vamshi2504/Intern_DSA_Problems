
public class Tharak_Solution 
{
    public int reverse(int x) 
    {
        int sum = 0;
        while( x != 0 )
        {
            int lastDigit = x % 10;
            x /= 10;
            if( sum > Integer.MAX_VALUE/10 || (sum == Integer.MAX_VALUE/10 && lastDigit > 7))
            {
                return 0;
            }
            if ( sum < Integer.MIN_VALUE/10 || (sum == Integer.MIN_VALUE/10 && lastDigit < -8 ))
            {
                return 0;
            }
            sum = sum*10+lastDigit;
        }
        return sum;
    }    
}

/*Created a variable sum which returns the reversed integer.
a while loop which will  extract the last digit everytime and remove that Digit in x untill x becomes Zero.
checking if the reversed integer(sum) is overflowing(lies in range -2^32>x<2^32)
if Overflow occurs returning Zero as output
if the overflow does not occurs then adding that digit to sum until the loop finishes
in the Last returning the Reversed number if overflow does not happen
Time Complexity is O(log 10(n))  since  we process each digit once
Space Complexity is O(1) as only a few variables are used
 */
