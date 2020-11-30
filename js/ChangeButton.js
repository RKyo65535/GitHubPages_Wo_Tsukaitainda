const totalImageCount = 100;
let imageNum = 0;

const incrementImageNum = () => {
  imageNum = (imageNum + 1) % 100;
};

const decrementImageNum = () => {
  imageNum = (imageNum - 1 + totalImageCount) % 100;
};

const getImageUrl = () => `image/artwork/ariawase/Item${imageNum}.png`;

const updateImageUrl = () => {
  masterImage.src = getImageUrl();
};

const masterImage = document.querySelector("#MasterImage");

document.querySelector("#forwordButton").addEventListener("click", () => {
  incrementImageNum();
  updateImageUrl();
});

document.querySelector("#backButton").addEventListener("click", () => {
  decrementImageNum();
  updateImageUrl();
});

document.oncontextmenu = () => {
	window.alert('このページでは右クリックが奨励されています！！');
	return true;//右クリック奨励
}
