const reverseString = function(str='string') {
    let newStr= "";
    for(i in str){
        newStr += str.slice(str.length-1);
        str = str.slice(0,str.length-1);
    }
    console.log(newStr);
    return newStr;
}

module.exports = reverseString
