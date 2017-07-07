var etapeName = document.getElementById("askForName");
var etapePlay = document.getElementById("onJoue");
var etapeJoue = document.getElementById("play");
var etapeAnim = document.getElementById("animation");
var etapeScor = document.getElementById("score");
var botChoix2 = document.getElementById("botChoix2");

etapePlay.style.visibility = "hidden";
etapeJoue.style.visibility = "hidden";
etapeAnim.style.visibility = "hidden";
etapeScor.style.visibility = "hidden";
botChoix2.style.visibility = "hidden";

document.getElementById("btnAskForName").addEventListener("click", switchToWannaPlay);

// var prenom = "";

function switchToWannaPlay() {
  prenom = document.getElementsByTagName("input")[0].value;
  document.getElementById("lePrenom").innerHTML = prenom;
  document.getElementById("Joueur1").innerHTML = prenom;
  etapePlay.style.visibility = "visible";
  etapeName.style.visibility = "hidden";
}
// prompt(prenom);

function switchToTuJoues() {
  etapePlay.style.visibility = "hidden";
  etapeJoue.style.visibility = "visible";
  bubbleVisible = document.getElementsByTagName("figure")[0];
  h1Visible = document.getElementsByTagName("h1")[0];
  bubbleVisible.style.visibility = "hidden";
  h1Visible.style.visibility = "hidden";
  etapeScor.style.visibility = "visible";
}


var userChoice = document.getElementById("ciseaux").addEventListener("click", lancelejeu);
var userChoice = document.getElementById("papier").addEventListener("click", lancelejeu);
var userChoice = document.getElementById("pierre").addEventListener("click", lancelejeu);


function lancelejeu() {
    var userPoint = 0 , ordiPoint = 0;
    var userChoice ="", ordiChoice = "";
    var allOpt = ["pierre", "papier", "ciseaux"];

    for (i = 0; (userPoint || ordiPoint) !== 3; i++) {

    ordiChoice = allOpt[Math.floor(Math.random() * allOpt.length)];
//    console.log(ordiChoice);

    userChoice = prompt("Ecrivez 'pierre' 'papier' ou 'ciseaux'").toLowerCase();
//    console.log(userChoice);

    bubbleVisible.style.visibility = "visible";
    botChoix2.style.visibility = "visible";

        switch (userChoice) {

            case "pierre":
            alert("l'ordi avait choisi : "+ ordiChoice);

              if (ordiChoice == "ciseaux") {
                botChoix.setAttribute('src', "./img/ciseaux.png");
                alert("you win !");
                userPoint++;
              } else if (ordiChoice == "papier") {
                botChoix.setAttribute('src', "./img/feuille.png");
                alert("you loose !");
                ordiPoint++;
              } else {
                botChoix.setAttribute('src', "./img/pierre.png");
                alert("Egalité !");
              }
            break;

            case "papier":
            bubbleVisible.style.visibility = "visible";

              if (ordiChoice == "pierre") {
                botChoix.setAttribute('src', "./img/pierre.png");
                alert("you win !");
                userPoint++;
              } else if (ordiChoice == "ciseaux") {
                botChoix.setAttribute('src', "./img/ciseaux.png");
                alert("you loose !");
                ordiPoint++;
              } else {
                botChoix.setAttribute('src', "./img/feuille.png");
                alert("Egalité !");
              }
            break;

            case "ciseaux":
            alert("l'ordi avait choisi : "+ ordiChoice);

              if (ordiChoice == "papier") {
                botChoix.setAttribute('src', "./img/feuille.png");
                alert("you win !");
                userPoint++;
              } else if (ordiChoice == "pierre") {
                botChoix.setAttribute('src', "./img/pierre.png");
                alert("you loose !");
                ordiPoint++;
              } else {
                botChoix.setAttribute('src', "./img/ciseaux.png");
                alert("Egalité !");
              }

            break;

            default:
            bubbleVisible.style.visibility = "visible";
            alert("on avait dit 'pierre' 'feuille' ou 'ciseaux', ne cherche pas à improviser");
        }


    document.getElementById("userPoint").innerHTML = userPoint;
    document.getElementById("ordiPoint").innerHTML = ordiPoint;

    }

    if (ordiPoint > userPoint) {
    alert("T'as perdu contre une machine !!!!");
  } else {
    alert("Bravo, tu as gagné");
  }
}
