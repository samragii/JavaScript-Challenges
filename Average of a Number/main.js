//Write a function to calculate the average of all the numbers in an array
function calculateAverage(arr) {
 let sum=0;
 let avg;
  for(let i=0;i<arr.length;i++)
  {
   
    sum=(sum+arr[i]);
    avg=sum/arr.length;
  }
 return avg;
}