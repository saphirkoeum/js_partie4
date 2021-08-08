var languages = ["PHP", "JavaScript", "HTML", "CSS", "JAVA", "Bootstrap"];

function displayTable() {
  //sort trie les éléments du tableau
  listsOrder = languages.sort();
  document.getElementById("div1").innerHTML = listsOrder;
}
  // document.getElementById("div1").innerHTML = fruits.sort();


// METHODE 2
// var table = ["PHP", "JavaScript", "HTML", "CSS", "JAVA", "Bootstrap"];
// function showMe() {
//   alert(table);
//   var newDiv = document.createElement("div")
//   var newContent = document.createTextNode(table);
//   // ajoute le nœud texte a la nouvelle div créée
//   newDiv.appendChild(newContent);
//
//   // ajoute le nouvel élément créé et son contenu dans le DOM
//   var currentDiv = document.getElementById('div1');
//   document.body.insertBefore(newDiv, currentDiv);
// }
