//Write a function to calculate the percentage change between two numbers
function calculatePercentageChange(oldNum, newNum) {
    return ((newNum-oldNum)/oldNum)*100;
}

console.log(calculatePercentageChange(54,65));