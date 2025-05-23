const reverseString = function(string) {
    let arr = string.split("");
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let p = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = p;
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
