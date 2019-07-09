const sumAll = function() {
    let sum = 0
    for (i in arguments){
        if (arguments[i] < 0 ){
            return "ERROR";
        }
        if(typeof arguments[i] !== "number"){
            return "ERROR";
        }
        else{
            continue;
        }
    }
    /*******Solved with While Loop******************/
    if (arguments[0] < arguments[1]){
        var start = arguments[0];
        var end = arguments[1];
    }
    else{
        var start = arguments[1];
        var end = arguments[0];
    }
    while(start <= end){
        sum += start;
        start++;
    }
    /********Solved with Math equation********* */
    /*
    if (arguments[0] < arguments[1]){
        sum += arguments[1]*(arguments[1]+arguments[0]) / 2;
    }
    else{
        sum += arguments[0]*(arguments[0]+arguments[1]) / 2;
    }
    */
    console.log(sum);
    return sum;
}

module.exports = sumAll


