var reverse = function(x) {
    let reversed = x
    .toString()
    .split('')
    .reverse()
    .join('');

    let reversedInt = Math.sign(x) * parseInt(reversed);
    
    return (reversedInt <= 0x7fffffff && reversedInt >= -0x80000000) ? reversedInt : 0;
    
};