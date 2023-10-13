var likes = [9, 12, 9];
var likeElement = [
    document.querySelector(".likes1"),
    document.querySelector(".likes2"),
    document.querySelector(".likes3")
]; 

function add1(id) {
    likes[id]++;
    likeElement[id].innerText = likes[id] + " likes(s)";
}