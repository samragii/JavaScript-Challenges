//Write a function to calculate the time when two people moving at different speed will meet
function calculateMeetingTime(distance, speed1, speed2) {
    return 2*distance/(speed1+speed2);
}
console.log(calculateMeetingTime(100,10,5));