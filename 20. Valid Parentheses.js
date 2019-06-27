var isValid = function(s) {
    var stack = [];
    var pair = {};
    
    pair['('] = ')';
    pair['['] = ']';
    pair['{'] = '}';
    
    for (var i = 0; i < s.length; i++){
        if(!stack.length){
            stack.push(s[i]);
        }else{
            if(s[i] === pair[stack[stack.length - 1]]){
                stack.pop();
            }else{
                stack.push(s[i]);
            }
        }
    }
    return !stack.length;
    
};