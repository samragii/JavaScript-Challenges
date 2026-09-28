function calculateFactorial(num) {
      let f=1;
    for(let i=1;i<=num;i++)
    {
        f=f*i;
    }
     return f;
}

console.log(calculateFactorial(5));