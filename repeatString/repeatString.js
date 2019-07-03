const repeatString = function(str='hey', num=3) {
    
    if(num < 0){
        return 'ERROR';
    }
    
    else{
        let newStr= '';
        for (let i = 0; i<num; i++){
            newStr+= str;
        }
        return newStr;
    }
    
    
}
module.exports = repeatString
