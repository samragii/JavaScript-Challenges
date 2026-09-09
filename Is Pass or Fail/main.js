function checkPassOrFail(marks) {
    if(marks>=40)
    {
        return "Pass";
    }
    else{
        return "Fail"
    }
}

let m = checkPassOrFail(45);
console.log(m);