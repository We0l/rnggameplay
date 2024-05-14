var hedrea = document.getElementById("poopypants");
var herede = document.getElementById("shittypants");
var zoriti = document.getElementById("renginuz");
var gearingus = document.getElementById("poopierpants");
var gearweed = document.getElementById("gear1image");
var Commonspan = document.getElementById("Commonspan");
var Uncommonspan = document.getElementById("Uncommonspan");
var Rarespan = document.getElementById("Rarespan");
var Godspan = document.getElementById("Godspan");
var jumpcsrae = 1000000000;
var gearactive = false;
function changestyle(text, color) {
  hedrea.innerText = text;
  zoriti.style.backgroundColor = color;
}
herede.addEventListener("click", function () {
  let x = Math.random() * jumpcsrae;
  if (gearactive) {
    x = x * 1.15;
  }
  if (x < jumpcsrae / 2) {
    changestyle("Common", "#FFFFFF");
    Commonspan.innerText = Number(Commonspan.innerText) + 1;
  } else if (x > jumpcsrae / 2 && x < jumpcsrae / (4 / 3)) {
    changestyle("Uncommon", "#F8ED7D");
    Uncommonspan.innerText = Number(Uncommonspan.innerText) + 1;
  } else if (x > jumpcsrae / (4 / 3) && x < jumpcsrae / (8 / 7)) {
    changestyle("Rare", "#FFBA50");
    Rarespan.innerText = Number(Rarespan.innerText) + 1;
  } else {
    changestyle("God", "#DA0000");
    Godspan.innerText = Number(Godspan.innerText) + 1;
  }
});
gearingus.addEventListener("click", function () {
  gearactive = !gearactive;
  if (gearactive) {
    gearweed.style.opacity = 1;
    herede.innerText = "Roll! (1.15x luck)";
  } else {
    gearweed.style.opacity = 0.3;
    herede.innerText = "Roll!";
  }
});
