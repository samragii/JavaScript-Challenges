//Write a function to generate the nth Carlo Number
function carolNumber(n) {
  return ((2**n)-1)**2-2;
}

console.log(carolNumber(4));