//Write a function to determine if a student has passed,failed or entered a invalid mark
function checkResult(marks) {
    if(marks<0 || marks>100)
    {
        return "Invalid";
    }
    else if(marks>=40)
    {
        return "Pass";
    }
    else
    {
        return "Fail";
    }
}