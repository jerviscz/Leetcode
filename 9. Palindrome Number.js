var isPalindrome = function(x) {
    const reversed = x
    .toString()
    .split('')
    .reverse()
    .join('')
    
    return x == reversed;
};