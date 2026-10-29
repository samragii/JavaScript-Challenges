//Write a function to determine if the number of likes is greater than the number of dislikes
function checkLikesVsDislikes(likes, dislikes) {
    if(likes>dislikes)
    {
        return "Liked";
    }
    else if (likes<dislikes)
    {
        return "Disliked";
    }
    else{
        return "Neutral";
    }
}

console.log(checkLikesVsDislikes(10,2));