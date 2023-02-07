const opener = document.querySelector(".opener");
const closer = document.querySelector("#closer");
const menu = document.querySelector(".menu");


opener.addEventListener("click", function () {
    menu.classList.remove("hide")
    console.log("hide 클래스를 제거했습니다")
});

closer.addEventListener("click", function () {
    menu.classList.add("hide")
    console.log("hide 클래스를 추가했습니다")
});
