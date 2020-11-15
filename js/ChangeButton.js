let imageNum = 0;
const imageURL = "image/artwork/ariawase/Item";

document.querySelector("#forwordButton").addEventListener("click", function () {
  imageNum = (imageNum + 1) % 100;
  document.getElementById("MasterImage").src = imageURL + imageNum + ".png";
});

document.querySelector("#backButton").addEventListener("click", function () {
  imageNum = (imageNum + 99) % 100;
  document.getElementById("MasterImage").src = imageURL + imageNum + ".png";
});
