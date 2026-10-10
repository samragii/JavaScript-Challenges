function checkParallel(line1, line2) {
    let x1=line1[0];
    let y1=line1[1];
    let x2=line1[2];
    let y2=line1[3];

    let a1=line2[0];
    let b1=line2[1];
    let a2=line2[2];
    let b2=line2[3];


     let slope1=(y2-y1)/(x2-x1);
     let slope2=(b2-b1)/(a2-a1);
     if(slope1==slope2)
     {
        return "Parallel";
     }
     else{
        return "Not Parallel";
     }
}