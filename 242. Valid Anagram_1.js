var isAnagram = function(s, t) {
    const sCharMap = buildCharMap(s);
    const tCharMap = buildCharMap(t);
    
    if(Object.keys(sCharMap).length !== Object.keys(tCharMap).length){
        return false;
    }
    
    for (let char in sCharMap){
        if (sCharMap[char] !== tCharMap[char] ){
            return false;
        }
    }
    return true;
};

function buildCharMap(str){
    const charMap = {};
    
    for (let char of str){
        charMap[char] = charMap[char] +1 || 1;
    }
    return charMap;
}