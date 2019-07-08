const removeFromArray = function() {
    newArray = arguments[0];
    console.log(newArray);
    //(outer)for loop goes through arguments starting after the array
    outer:for (i=1; i<arguments.length; i++){
        //(inner)for loop goes through the array looking for value
        //at position argument[i]
        inner:for(j in newArray){
            //console.log(newArray[j]);
            if (newArray[j] == arguments[i]){
                //console.log(newArray[j]);
                newArray.splice(j, 1);
                break;
            }
        }
        console.log(newArray);    
    }
    return newArray;
}

module.exports = removeFromArray
