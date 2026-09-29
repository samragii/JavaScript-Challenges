//Write a function to find the Hypotenuse of a Right Angle Triangle
function calculateHypotenuse(a, b) {
    let h=Math.sqrt((a*a)+(b*b));
    return h;
}


console.log(calculateHypotenuse(2,3));