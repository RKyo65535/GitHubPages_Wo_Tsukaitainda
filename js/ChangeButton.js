let imageNum = 0;
const masterImage = document.querySelector("#MasterImage");

const getImageUrl = () => `image/artwork/ariawase/Item${imageNum}.png`

document.querySelector("#forwordButton").addEventListener("click", function () {
  imageNum = (imageNum + 1) % 100;
  masterImage.src = getImageUrl();
});

document.querySelector("#backButton").addEventListener("click", function () {
  imageNum = (imageNum + 99) % 100;
  masterImage.src = getImageUrl();
});
