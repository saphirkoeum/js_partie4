//   var flag = prompt("Quelle est la première couleur du drapeau Français ?")
//   toLowerCase prend en compte les réponses en majuscule
//flag = flag.toLowerCase();
//
// switch (flag){
//   case "bleu" :
//     alert("Bien joué !");
//     break;
//   case "blanc" :
//     alert("Blanc est la deuxième couleur");
//     break;
//   case "rouge":
//     alert("Rouge est la troisème couleur");
//     break;
//   default :
//     alert("Veuillez saisir une couleur");
// }
//switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.

function displayAnswer() {
  var answer = document.getElementById("question").value;
  answer = answer.toLowerCase();

  switch (answer){
    case "bleu" :
      alert("Bien joué !")
      // document.getElementById("answer").innerHTML = "Bien joué !";
      break;
    case "blanc" :
      alert("Blanc est la deuxième couleur");
      break;
    case "rouge":
      alert("Rouge est la troisème couleur");
      break;
    default :
      alert("Veuillez saisir une couleur");
    }
}
