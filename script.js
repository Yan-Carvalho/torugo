let modal = document.getElementById("modal");
let produto = document.getElementById("produto");
function cardDescription() {
  modal.style.display = "flex";
  produto.style.zIndex = "-999";
}

function closeAba() {
  modal.style.display = "none";
}
