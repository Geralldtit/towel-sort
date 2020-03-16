
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!Array.isArray(matrix) || matrix.length == 0) return [];    
    
    return matrix.reduce(function (arr, currentValue, index) {
        return arr.concat((Array.isArray(currentValue) && (index % 2 != 0)) ? currentValue.reverse() : currentValue);
    });
}
