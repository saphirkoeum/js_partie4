// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };


var clique = 0;

function clic() {
  document.getElementById('html').innerHTML = 'Vous avez cliqué ' + ++clique + ' fois.';
}
