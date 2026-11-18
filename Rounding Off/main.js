function roundOff(num, ndigits) {
    let variable=num.toFixed(ndigits);
    return variable;
}

console.log(roundOff(7.3579,3));