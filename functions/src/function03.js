/*
Write an arrow function cube that returns the cube of a number.
Write a function expression isEven that returns true if a number is even.
*/
var cube = function (num) {
    return num * num * num;
};
var ans = cube(4);
console.log(ans);
//-------------- -- ---- --- 
var isEven = function (num) {
    if (num % 2 == 0) {
        return true;
    }
    else
        return false;
};
console.log(isEven(5));
