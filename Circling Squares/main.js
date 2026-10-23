//Write a function to calculate the length of a square that has the same area as the given circle
function calculateLength(r) {
    return Math.sqrt(Math.PI*r*r);
}
console.log(calculateLength(5));