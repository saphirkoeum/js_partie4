// Récupérer la saisie du joueur entre 1 et 100
// Bloquer l'utilisateur a 5 essais
// indiquer si la saisie est inférieur ou supérieur
// Au bout de 5 afficher la réponse
// afficher les nombres tentés

//generé un nombre random
let randomNumber = Math.floor(Math.random()*100) + 1;

//réponses du joueur
var playerGuesses = document.getElementById("playerGuesses");
//donner un indice au joueur
var hint = document.getElementsById("hint")
//les nombres tentés par le joueur
var lastResult = document.getElementsById("lastResult")
//nombre de tentative, 1ere tentative au début de la partie
var count = 1;

//on récupère les chiffres saisie par le joueur
var playerInput = document.getElementsById("playerInput")
//on enregistre l'évenement clic
var playerSubmit = document.getElementsById("playerSubmit")

// ETAPE 2 : Definir notre fonction principale. 
//Elle sert à quoi ? elle sert à vérifier si la proposition du joueur est correcte ou non. Et on veut lui en envoyer une réponse appropriée.

// Etape 2a: déclarer une variable pour stocker le nombre proposé

// Etape 2b : Si le nombre de tentative donc guessCount est égale à 1, alors on affiche notre premier paragraphe. Cette étape n'aura donc lieu d'une fois.

// Etape 2c : On "incrémente" guesses.textContent en y ajoutant la valeur de la dernière tentative, du dernier playerGuess/

// Etape 2d : Condition si joueur trouve bonne réponse

// étape 2e : Condition si le joueur a perdu

// Etape 2f : Condition si le joueur n'a pas gagné, mais n'a pas encore perdu, on lui donne des conseils pour la tentativ suivante

//Etape 2g: on Incrémente guessCount de 1. On redonne à guessField une empty string.


function play() {
 let randomNumber = Math.floor(Math.random()*100) + 1;
 if (playerInput < randomNumber)
 alert("C'est trop petit !")
}
