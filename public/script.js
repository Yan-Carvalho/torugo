let modal = document.getElementById("modal");
let produto = document.getElementById("produto");
function cardDescription() {
  modal.style.display = "flex";
  produto.style.zIndex = "-999";
}

let sectionDrink = document.getElementById("sectionDrink")
function cadastroForm(){
  sectionDrink.style.display = "flex";
}


function closeAba() {
  modal.style.display = "none";
  sectionDrink.style.display = "none"
}


