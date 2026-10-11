//Write a function to find which vehicle the user likes
function checkPreference(preference) {
   if(preference==2)
   {
    return "Bike";
   }
   else if (preference==3)
   {
    return "Trikes";
   }
   else if (preference==4)
   {
    return "Car";
   }
   else{
    return "Other";
   }
}
console.log(checkPreference(3));