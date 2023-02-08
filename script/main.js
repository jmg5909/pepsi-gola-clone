const opener = document.querySelector(".opener");
const closer = document.querySelector("#closer");
const menu = document.querySelector(".menu");

opener.addEventListener("click", function () {
  // menu.classList.remove("hide")
  menu.style.display = "block";
});

closer.addEventListener("click", function () {
  // menu.classList.add("hide")
  menu.style.display = "none";
});
