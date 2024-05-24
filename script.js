
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
        { src: "img/cake.png", title: "gateau" },
        { src: "img/candle.png", title: "bougie" },
        { src: "img/candy.png", title: "bonbon" },
        { src: "img/car.png", title: "voiture" },
        { src: "img/cat.png", title: "chat" },
        { src: "img/chair.png", title: "chaise" },
        { src: "img/cloud.png", title: "nuage" },
        { src: "img/cow.png", title: "vache" },
        { src: "img/dice.png", title: "de" },
        { src: "img/dress.png", title: "robe" },
        { src: "img/flower.png", title: "fleur" },
        { src: "img/hat.png", title: "chapeau" },
        { src: "img/knife.png", title: "couteau" },
        { src: "img/pizza.png", title: "pizza" },
        { src: "img/pull.png", title: "pull" },
        { src: "img/tree.png", title: "arbre" },
        { src: "img/umbrella.png", title: "parapluie" }
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
        }, 2200);
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
window.onload = randomImage;
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

