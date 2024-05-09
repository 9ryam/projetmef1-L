function randomImage() {
  var images = [
      { src: "img/butterfly.png", title: "papillon" },
      { src: "img/car.png", title: "voiture" },
      { src: "img/cat.png", title: "chat" },
      { src: "img/cow.png", title: "vache" },
      { src: "img/flower.png", title: "fleur" },
      { src: "img/tree.png", title: "arbre" }
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  document.getElementById("randomImage").src = randomImage.src;
  document.getElementById("randomImage").title = randomImage.title; 
}

function checkGuess() {
  var userGuess = document.getElementById("guessInput").value.toLowerCase();
  var correctAnswer = document.getElementById("randomImage").title.toLowerCase();

  var resultText = "";
  if (userGuess === correctAnswer) {
    resultText = "Correct, vous n'êtes pas un robot :) Bienvenue !";
  } else {
    resultText = "Faux :/ Réessayez !" ;
  }
  document.getElementById("result").textContent = resultText;
}
window.onload = randomImage;
document.getElementById("submitGuess").addEventListener("click", checkGuess);

