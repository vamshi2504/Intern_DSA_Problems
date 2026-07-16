/**
 * Problem: Reverse Integer
 *
 * Approach:
 * We repeatedly extract the last digit of the integer using the modulus (%) operator.
 * The extracted digit is appended to the reversed number by multiplying the current
 * reversed value by 10 and adding the digit. After extracting a digit, we remove it
 * from the original number using Math.trunc(x / 10). Once all digits are processed,
 * we check whether the reversed integer lies within the 32-bit signed integer range.
 * If it exceeds the range, we return 0; otherwise, we return the reversed integer.
 *
 * Time Complexity: O(log n)
 * Reason: We process each digit of the integer exactly once.
 *
 * Space Complexity: O(1)
 * Reason: Only a few variables are used, regardless of the input size.
 */
function reverse(x) {
  let reversed = 0;
  while (x !== 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.trunc(x / 10);
  }
  if (reversed > 2147483647 || reversed < -2147483648) {
    return 0;
  }
  return reversed;
}

function revInteger(x) {
  let rev = 0;
  let MAX_INT = Math.pow(2, 31) - 1;
  let MIN_INT = -Math.pow(2, 31);
  while (x !== 0) {
    const digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.trunc(x / 10);
  }
  if (rev < MIN_INT || rev > MAX_INT) {
    return 0;
  }
  return rev;
}
console.log("Test Case 1:", revInteger(123));
console.log("Test Case 2:", revInteger(-123));
console.log("Test Case 3:", revInteger(120));
console.log("Test Case 4:", revInteger(1534236469));
console.log("--------------------");
console.log("Test Case 1:", reverse(123));
console.log("Test Case 2:", reverse(-123));
console.log("Test Case 3:", reverse(120));
console.log("Test Case 4:", reverse(1534236469));
