var imageNum = 0;
var imageURL = "image/artwork/ariawase/Item";

function forwordButton() {

	imageNum =(imageNum + 1)%100;
	document.getElementById("MasterImage").src = imageURL + imageNum + ".png";
}

function backButton() {

	imageNum = (imageNum + 99) % 100;
	document.getElementById("MasterImage").src = imageURL + imageNum + ".png";
}