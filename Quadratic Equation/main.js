function findRoots(a, b, c) {
    let x=(-b+Math.sqrt(b**2-4*a*c))/2*a;
    let y=(-b-Math.sqrt(b**2-4*a*c))/2*a;
    return [x,y];
    
}


console.log(findRoots(2,3,4));