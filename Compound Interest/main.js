//Write a function to calculate the compound interest
function calculateCompoundInterest(P, r, t) {
    return P*(1+r/1)**t;
}
console.log(calculateCompoundInterest(5000,0.05,5));