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