function checkDivisibility(num1, num2) {
    if((num1*num2)%(num1+num2)==0)
    {
        return "Divisible";
    }
    else{
        return "Not divisible";
    }
}

console.log(checkDivisibility(4,2));