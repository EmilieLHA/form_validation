// Selection des elements du DOM 
let inputUtilisateur = document.querySelector('#utilisateur');
let inputEmail       = document.querySelector('#email');
let inputPassword    = document.querySelector('#password');
let inputConfirmation= document.querySelector('#confirmation');

let messages         = document.querySelectorAll('.message');
let icones           = document.querySelectorAll('img');
let button           = document.querySelector('button');

let securityLines    = document.querySelectorAll('.security');

// console.log(icones);

//Vérification du nom d'utilisateur

inputUtilisateur.addEventListener('input', () => {
    if (inputUtilisateur.value.length < 3) {
        messages[0].style.display = "block"; 
        icones[0].src = "ressources/close.png";
        icones[0].style.display = "inline";
    } else {
        messages[0].style.display = "none"; 
        icones[0].src = "ressources/check.png";
        icones[0].style.display = "inline";
    }
});

//Vérification de l'email

inputEmail.addEventListener('input', () => {

    let regExpMail = /\S+@\S+\.\S+/;

    if (inputEmail.value.search(regExpMail) === 0 ) {
        messages[1].style.display = "none"; 
        icones[1].src = "ressources/check.png";
        icones[1].style.display = "inline";
    } else {
        messages[1].style.display = "block"; 
        icones[1].src = "ressources/close.png";
        icones[1].style.display = "inline";
    }
});

// Vérification du mot de passe et affichage de la complexité

inputPassword.addEventListener('input', (e) => {

    let regexSymbol = /[^a-zA-Z0-9]/;
    let regexAlphabet = /[a-z]/i;
    let regexChiffres = /[0-9]/;
    let regexLongueur = /.{3,}/;

    let validation = {
        symbol : 0,
        alphabet : 0,
        chiffres : 0,
        longueur : 0
    };

    if (inputPassword.value.match(regexSymbol)){
        validation.symbol = 1;
    };
    if (inputPassword.value.match(regexAlphabet)){
        validation.alphabet = 1;
    };
    if (inputPassword.value.match(regexChiffres)){
        validation.chiffres = 1;
    };
    if (inputPassword.value.match(regexLongueur)){
        validation.longueur = 1;
    };

    console.log(validation);



    let test = 0;
    for (let property in validation){
        test+=validation[property];
    }
    console.log(test);
    if (test == 4) {
        messages[2].style.display = "none"; 
        icones[2].src = "ressources/check.png";
        icones[2].style.display = "inline";
    } else {
        messages[2].style.display = "block"; 
        icones[2].src = "ressources/close.png";
        icones[2].style.display = "inline";
    }

    console.log(inputPassword.value.length);
    // Force du mot de passe 

    if (inputPassword.value.length <= 6 && inputPassword.value.length > 0){
        messages[3].style.display = "block";
        securityLines[0].style.visibility = "visible";
        securityLines[1].style.visibility = "hidden";
        securityLines[2].style.visibility = "hidden";
    } else if (inputPassword.value.length >= 6 && inputPassword.value.length <8){
        messages[3].style.display = "block";
        securityLines[0].style.visibility = "visible";
        securityLines[1].style.visibility = "visible";
        securityLines[2].style.visibility = "hidden";
    } else if (inputPassword.value.length >=8 ){
        messages[3].style.display = "block";
        securityLines[0].style.visibility = "visible";
        securityLines[1].style.visibility = "visible";
        securityLines[2].style.visibility = "visible";
    } else {
        messages[3].style.display = "none";
        securityLines[0].style.visibility = "hidden";
        securityLines[1].style.visibility = "hidden";
        securityLines[2].style.visibility = "hidden";
    }

})

// Confirmation du mot de passe 
inputConfirmation.addEventListener('input', () => {
    if (inputConfirmation.value.length === 0){
        messages[4].style.display = "none"; 
        icones[3].src = "ressources/close.png";
        icones[3].style.display = "inline";
    }
    else if(inputConfirmation.value === inputPassword.value) {
        messages[4].style.display = "none"; 
        icones[3].src = "ressources/check.png";
        icones[3].style.display = "inline";
    } else {
        messages[4].style.display = "block"; 
        icones[3].src = "ressources/close.png";
        icones[3].style.display = "inline";
}
})



