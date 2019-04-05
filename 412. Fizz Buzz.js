var fizzBuzz = function(n) {
    let reslut = [];
    var str;
    
    for(let i = 1; i <= n; i++){
        if (i % 15 === 0){
            str = 'FizzBuzz';
            reslut.push( str );
        }
        else if (i % 3 === 0){
            str = 'Fizz';
            reslut.push( str );
        }
        else if (i % 5 === 0){
            str = 'Buzz';
            reslut.push( str );
        }else{
            str = i;
            reslut.push(''+i+'');
        }
    }
    return reslut;
};