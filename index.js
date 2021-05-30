var randomNumber1 = Math.random(),
    randomNumber2 = Math.random();

randomNumber1 = (Math.floor(randomNumber1 * 6)) + 1;
randomNumber2 = (Math.floor(randomNumber2 * 6)) + 1;

var imgElement1 = document.querySelectorAll("img")[0];
var imgElement2 = document.querySelectorAll("img")[1];

imgElement1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
imgElement2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var textElement = document.querySelector(".container h1");


if (randomNumber1 > randomNumber2) {
    textElement.innerHTML = "🔥Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    textElement.innerHTML = "Player 2 wins!🔥";
} else if (randomNumber1 === randomNumber2) {
    textElement.innerHTML = "Draw!";
}