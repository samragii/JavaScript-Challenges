//Write a function to calculate Earned Run Average
function calculateERA(earnedRuns, inningsPitched) {
    let num = (earnedRuns/inningsPitched)*9;
     return Number.isInteger(num) ? num : Number(num.toFixed(2));
}