function toggleMenu() {
    const navbarNav = document.getElementById('navbarNav');
    const navbarToggler = document.getElementById('navbarToggler');
    navbarNav.classList.toggle('show');
    navbarToggler.style.display = navbarNav.classList.contains('show') ? 'none' : 'inline-block';
}

function hideMenu() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.remove('show');
    document.getElementById('navbarToggler').style.display = 'inline-block';
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            hideMenu();
        });
    });


    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('mouseleave', function() {
        hideMenu();
    });
});
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
   
      function checkGuess1() {

        var userGuess = document.getElementById("guessInput").value.toLowerCase();
        var correctAnswer = document.getElementById("randomImage").title.toLowerCase();

        var resultText = "";
        if (userGuess === correctAnswer) {
            resultText = "Correct, vous n'êtes pas un robot :) Bienvenue !";
            // Redirection vers le site après validation du captcha
            setTimeout(function() {
                window.location.href = "main.html";
                }, 3000);
        } else {
            resultText = "Faux :/ Réessayez !";
        }
        document.getElementById("result").textContent = resultText;
    }

// Fonction pour vérifier le captcha sans changement de page
function checkGuess() {
    var userGuess = document.getElementById("guessInput").value.toLowerCase();
    var correctAnswer = document.getElementById("randomImage").title.toLowerCase();

    var resultText = "";
    if (userGuess === correctAnswer) {
        resultText = "Correct, vous n'êtes pas un robot :) Bienvenue !";
    } else {
        resultText = "Faux :/ Réessayez !";
    }
    document.getElementById("result").textContent = resultText;
}
document.getElementById("submitGuess").addEventListener("click", checkGuess1);
// Événement pour vérifier le captcha lors du clic sur le bouton
document.getElementById("submitGuess").addEventListener("click", checkGuess1); // Utilise checkGuess1 pour le captcha avec redirection
// Événement pour vérifier le captcha lors du clic sur le bouton (pour le captcha simple)
document.getElementById("submitGuessSimple").addEventListener("click", checkGuess); // Utilise checkGuess pour le captcha simple
// Au chargement de la page, afficher une image aléatoire
window.onload = randomImage;

function sendEmail() {
    window.location.href = "mailto:77maryamkitty@gmail.com";
}

function callUs() {
    window.location.href = "tel:+0669440129";
}

