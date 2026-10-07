//Write a function to find the sum of odd numbers in an array
function sumOfOdds(numbers) {
 let sum=0;
 for(let i=0;i<numbers.length;i++)
 {
    if(numbers[i]%2!==0)
    {
        sum=sum+numbers[i];
    }
 }
  return sum;
}
console.log(sumOfOdds([1,3,5,7,9,2]))