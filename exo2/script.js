var languages = ["PHP", "JavaScript", "HTML", "CSS", "JAVA", "Bootstrap"];

function addToList() {
  var input = document.getElementById("inputAddToList").value;
  //unshift ajoute au début du tableau
  var addTable = (languages.unshift(input));
  alert (input + 'à été ajouté à la liste');
}

function showList(){
  alert (languages);
}
