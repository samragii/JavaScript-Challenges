//Write a function to generate the nth Woodall number
function woodallNumber(n) {
    return n*(2**n)-1;
}
console.log(woodallNumber(4));