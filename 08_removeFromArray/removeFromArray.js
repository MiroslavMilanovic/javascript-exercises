const removeFromArray = function(arr, ...item) {
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        while(j < item.length){
            if(arr[i] === item[j]) {
                arr.splice(i, 1);
                j=0;
            }
            else j++;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
