function randomImage() {
            var images = [
                "img/butterfly.png",
                "img/car.png",
                "img/cat.png",
                "img/cow.png",
                "img/flower.png",
                "img/tree.png"
                // Ajoutez ici les noms de fichier de vos images
            ];

            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
            document.getElementById("randomImage").src = randomImage;
        }
        
        // Exécuter la fonction randomImage() lorsque la page se charge
        window.onload = randomImage;
