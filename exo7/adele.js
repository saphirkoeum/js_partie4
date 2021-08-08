// ETAPE 1 : Définir les variables pour stocker les données

// Etape 1a: Générer un random Number
let randomNumber = Math.floor(Math.random()*100) + 1;

// Etape 1b : Declarer 3 variables pour stocker les références aux trois paragraphes

let guesses = document.querySelector('.guesses');
let rightOrFalse = document.querySelector('.rightOrFalse');
let hint = document.querySelector('.hint');

// Etape 1c : Déclarer 2 variables pour stocker les ref, une pour l'input de saisi et une pour le bouton submit.
let guessField = document.getElementById('guessField');
let buttonSubmit = document.getElementById('buttonSubmit');

// Etape 1d : 1 variable pour stocker le nombre de tentative
let guessCount = 1; 

// ETAPE 2 : Definir notre fonction principale. Elle sert à quoi ? elle sert à vérifier si la proposition du joueur est correcte ou non. Et on veut lui en envoyer une réponse appropriée.

// Etape 2a: déclarer une variable pour stocker le nombre proposé

// Etape 2b : Si le nombre de tentative donc guessCount est égale à 1, alors on affiche notre premier paragraphe. Cette étape n'aura donc lieu d'une fois.

// Etape 2c : On "incrémente" guesses.textContent en y ajoutant la valeur de la dernière tentative, du dernier playerGuess/

// Etape 2d : Condition si joueur trouve bonne réponse

// étape 2e : Condition si le joueur a perdu

// Etape 2f : Condition si le joueur n'a pas gagné, mais n'a pas encore perdu, on lui donne des conseils pour la tentativ suivante

//Etape 2g: on Incrémente guessCount de 1. On redonne à guessField une empty string.

function checkGuess(){

    let playerGuess = Number(guessField.value);

    if (guessCount === 1){
        guesses.textContent = 'Propositions précédentes :'
    }

    guesses.textContent += playerGuess + ' ';

    if(playerGuess === randomNumber){
        rightOrFalse.textContent = 'Bravoooooooo';
        rightOrFalse.style.backgroundColor = "green";
        setGameFinish();
    } else if( guessCount === 5){
        rightOrFalse.textContent = "C'est perdu";
        setGameFinish();
    } else {
        rightOrFalse.textContent = "C'est faux...recommence";
        rightOrFalse.style.backgroundColor = "red";
        if (playerGuess < randomNumber){
            hint.textContent = 'Indice : Le nombre saisi est trop petit';
        } else if(playerGuess > randomNumber){
            hint.textContent = 'Indice : Le nombre est trop grand';
        }
    }

    guessCount++;
    guessField.value = '';
    // guessField.focus();
}

// Etape 3 : appeler la fonction checkGuess grâce à un évènement. On va utiliser la méthode addEventListener. Cette méthode va prendre deux arguments (paramètres). Le première argument c'est l'événement écouté donc le "click", le 2eme paramètre --> c'est ce qui se passe quand on a cliqué. JE CLIQUE --> CA LANCE LA FONCTION checkGuess

buttonSubmit.addEventListener('click', checkGuess);

function setGameFinish(){
    alert('GAME OVER')
}
