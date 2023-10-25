document.getElementById("menuicon").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var item = document.getElementsByClassName("itemmenu");
  var linha = document.getElementsByClassName("menuline");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menu.style.width = "50%";
    menu.style.height = "calc(100vh - 60px)";
    menu.style.position = "absolute";
    menu.style.left = "50%";
    menu.style.top = "60px";
    menu.style.display = "grid";
    menu.style.gridTemplateRows = "1fr 2fr 1fr 2fr 1fr 2fr 1fr 2fr 1fr";
    menu.style.background = "rgba(209, 145, 47, 0.7)";
    menu.style.backdropFilter = "blur(10px)";
    menu.style.alignItems = "center";
    menu.style.justifyItems = "center";
  } else {
    menu.style.display = "none";
  }
});
