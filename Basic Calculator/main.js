function basicCalculator(num1, op, num2) {
    if(op=='+')
    {
        return num1+num2;
    }
    else if(op=='-')
    {
        return num1-num2;
    }
    else if(op=='*')
    {
        return num1*num2;
    }
    else if(op=='/')
    {
        if(num2!=0)
        {
            return num1/num2;
        }
        else{
            return null;
        }
    }
    else
    {
        return null;
    }
}

console.log(basicCalculator(2,'+',3));