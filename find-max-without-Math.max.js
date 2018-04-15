function max (...nums) {
    let result = -Infinity
    for (let num of nums) {
        if (num > result) result = num;
    }
    return result;
}

console.log(max(4, 10, 12, -1, 5));
