function calculateTimeSaved(speed1, speed2, distance) {
    let time1= distance/speed1;
    let time2= distance/speed2;
    let timesaved=time1-time2;
    return timesaved;

}

console.log(calculateTimeSaved(30,40,120));