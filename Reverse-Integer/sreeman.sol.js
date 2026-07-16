// Reverse - integer problem
function reverse(n){
    let rev = 0;
    while(n !=0){
        rev =  rev * 10 +n % 10;
        n = Math.trunc(n/10);
    }
   if (rev < -2147483648 || rev > 2147483647) {
    return 0;
  }
    return rev;
}
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));

/**
 * Approach:
 * Take the last digit of the number and add it to the reversed number.
 * Remove the last digit from the original number and repeat the process
 * until no digits are left. Finally, check if the reversed number is
 * within the 32-bit integer range. If not, return 0; otherwise, return
 * the reversed number.
 *
 * Time Complexity: O(d)
 * Space Complexity: O(1)
 */