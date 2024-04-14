document.addEventListener('DOMContentLoaded', function() {
    
let captchas = [
    { image: "/Users/may/Downloads/cat.png", mot: "chat" },
    { image: "/Users/may/Downloads/fork.png", mot: "fourchette" },
    
];


let userText = document.getElementById('textBox');
let output = document.getElementById('output');
let refreshButton = document.getElementById('refreshButton');

function refreshCaptcha() {
 
    let nouveauCaptcha = captchas[Math.floor(Math.random() * captchas.length)];

    
    document.getElementById('captcha').src = nouveauCaptcha.image;

    
    motAttendu = nouveauCaptcha.mot;

    
    userText.value = "";
    output.innerHTML = "";
}

refreshButton.addEventListener('click', function() {
    refreshCaptcha();
});
