function generateStarRating(rating) {
    let s="";
    for(let i=0;i<rating;i++)
    {
        s=s+"*";
    }
    return s;
}

console.log(generateStarRating(8));