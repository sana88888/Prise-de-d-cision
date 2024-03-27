function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  const result = power(base, Math.floor(exponent / 2));
  if (exponent % 2 === 0) {
    return result * result;
  } else {
    return base * result * result;
  }
}

// console.log(power(2, 3));
// console.log(power(5, 2));
// console.log(power(3, 5));

// Palindrome Checker
function isPalindrome(str) {
  function cleanString(str) {
    return str.replace(/[\W_]/g, "").toLowerCase();
  }

  function isPalindromeHelper(cleanedStr) {
    if (cleanedStr.length <= 1) {
      return true;
    } else if (cleanedStr[0] !== cleanedStr[cleanedStr.length - 1]) {
      return false;
    } else {
      return isPalindromeHelper(cleanedStr.slice(1, cleanedStr.length - 1));
    }
  }

  const cleanedString = cleanString(str);
  return isPalindromeHelper(cleanedString);
}
