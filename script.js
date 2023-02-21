var topLikes = document.querySelector(".topLikes");
var bottomLikes = document.querySelector(".bottomLikes");
var topLikesCount = 29;
var bottomLikesCount = 17;
var searchBox=document.querySelector("#navSearch")

function remove(element) {
    element.remove();
}

function billJack() {
    topLikesCount++;
    topLikes.innerText = topLikesCount;
}

function jillJack() {
    bottomLikesCount++;
    bottomLikes.innerText = bottomLikesCount;
}

function goThere(){
    var alertMessage = "Searching for " + searchBox.value + "...";
    alert(alertMessage);
}