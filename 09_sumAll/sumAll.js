const sumAll = function(a ,b) {
    if(b < a){
        let p = a;
        a = b;
        b = p;
    }
    if(Number.isInteger(a) && Number.isInteger(b) && b>0 && a>0){
        let sum = 0;
        for(let i = a; i <= b; i++){
            sum += i;
        }
        return sum;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
