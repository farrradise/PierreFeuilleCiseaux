var etapeName = document.getElementById("askForName");
var etapePlay = document.getElementById("onJoue");
var etapeJoue = document.getElementById("play");
var etapeAnim = document.getElementById("animation");
var etapeScor = document.getElementById("score");
var botChoix2 = document.getElementById("botChoix2");
var userChoice;
var phraseEgal = document.getElementById('phrase');
var matchUser = document.getElementsByClassName('anim')[0];
var matchOrdi = document.getElementsByClassName('anim')[1];

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
  etapeAnim.style.visibility = "hidden";
  botChoix2.style.visibility = "hidden";

}


function supp() {
  phraseEgal.style.visibility = "hidden";
}

var userPoint = 0 , ordiPoint = 0;


function leChoix(th) {
  var userChoice;
  userChoice = th.id;


    var allOpt = ["pierre", "papier", "ciseaux"];

    ordiChoice = allOpt[Math.floor(Math.random() * allOpt.length)];

    bubbleVisible.style.visibility = "visible";
    botChoix2.style.visibility = "visible";

        switch (userChoice) {

            case "pierre":

              if (ordiChoice == "ciseaux") {
                var pos = 0;
                botChoix.setAttribute('src', "./img/ciseaux.png");
                phraseEgal.style.visibility = "hidden";
                etapeAnim.style.visibility = "visible";
                etapeJoue.style.visibility = "hidden";
                matchOrdi.setAttribute('src', "./img/ciseaux.png");
                matchUser.setAttribute('src', "./img/pierre.png");
                myMove();

                // algo sur la petite anim'
                function myMove() {
                  var test = setInterval(frame, 1);
                  function frame() {
                    if (pos == 170) {
                      clearInterval(test);
                    } else {
                      pos++;
                      matchUser.style.top = pos + 'px';
                      matchOrdi.style.bottom = pos + 'px';
                    }
                  }
                }

                setTimeout(myMessage, 1500);

                //suite de l'anim
                function myMessage() {
                  phraseEgal.style.visibility = "visible";
                  phraseEgal.innerHTML = "you win!";
                }

                setTimeout(mettrelepoint, 2000);
                function mettrelepoint() {
                  userPoint++;
                }

                setTimeout(switchToTuJoues, 3000);

                setTimeout(supp, 3000);

              } else if (ordiChoice == "papier") {
                var pos = 0;
                botChoix.setAttribute('src', "./img/feuille.png");
                phraseEgal.style.visibility = "hidden";
                etapeAnim.style.visibility = "visible";
                etapeJoue.style.visibility = "hidden";
                matchOrdi.setAttribute('src', "./img/feuille.png");
                matchUser.setAttribute('src', "./img/pierre.png");
                myMove();

                // algo sur la petite anim'
                function myMove() {
                  var test = setInterval(frame, 1);
                  function frame() {
                    if (pos == 170) {
                      clearInterval(test);
                    } else {
                      pos++;
                      matchUser.style.top = pos + 'px';
                      matchOrdi.style.bottom = pos + 'px';
                    }
                  }
                }

                setTimeout(myMessage, 1500);

                //suite de l'anim
                function myMessage() {
                  phraseEgal.style.visibility = "visible";
                  phraseEgal.innerHTML = "you loose!";
                }

                setTimeout(mettrelepoint, 2000);
                function mettrelepoint() {
                  ordiPoint++;
                }

                setTimeout(switchToTuJoues, 3000);

                setTimeout(supp, 3000);

              } else {
                botChoix.setAttribute('src', "./img/pierre.png");
                phraseEgal.style.visibility = "visible";
                phraseEgal.innerHTML = "Egalité. \n Allez on recommence ! ";
              }
            break;

            case "papier":

              if (ordiChoice == "pierre") {
                var pos = 0;
                botChoix.setAttribute('src', "./img/pierre.png");
                etapeAnim.style.visibility = "visible";
                etapeJoue.style.visibility = "hidden";
                phraseEgal.style.visibility = "hidden";
                matchOrdi.setAttribute('src', "./img/pierre.png");
                matchUser.setAttribute('src', "./img/feuille.png");
                myMove();

                // algo sur la petite anim'
                function myMove() {
                  var test = setInterval(frame, 1);
                  function frame() {
                    if (pos == 170) {
                      clearInterval(test);
                    } else {
                      pos++;
                      matchUser.style.top = pos + 'px';
                      matchOrdi.style.bottom = pos + 'px';
                    }
                  }
                }

                setTimeout(myMessage, 1500);

                //suite de l'anim
                function myMessage() {
                  phraseEgal.style.visibility = "visible";
                  phraseEgal.innerHTML = "you win!";
                }

                setTimeout(mettrelepoint, 2000);
                function mettrelepoint() {
                  userPoint++;
                }


                setTimeout(switchToTuJoues, 3000);

                setTimeout(supp, 3000);

              } else if (ordiChoice == "ciseaux") {
                var pos = 0;
                botChoix.setAttribute('src', "./img/ciseaux.png");
                etapeAnim.style.visibility = "visible";
                etapeJoue.style.visibility = "hidden";
                phraseEgal.style.visibility = "hidden";
                matchOrdi.setAttribute('src', "./img/ciseaux.png");
                matchUser.setAttribute('src', "./img/feuille.png");
                myMove();

                // algo sur la petite anim'
                function myMove() {
                  var test = setInterval(frame, 1);
                  function frame() {
                    if (pos == 170) {
                      clearInterval(test);
                    } else {
                      pos++;
                      matchUser.style.top = pos + 'px';
                      matchOrdi.style.bottom = pos + 'px';
                    }
                  }
                }

                setTimeout(myMessage, 1500);

                //suite de l'anim
                function myMessage() {
                  phraseEgal.style.visibility = "visible";
                  phraseEgal.innerHTML = "you loose!";
                }

                setTimeout(mettrelepoint, 2000);
                function mettrelepoint() {
                  ordiPoint++;
                }


                setTimeout(switchToTuJoues, 3000);

                setTimeout(supp, 3000);

              } else {
                botChoix.setAttribute('src', "./img/feuille.png");
                phraseEgal.style.visibility = "visible";
                phraseEgal.innerHTML = "Egalité! \n Allez on recommence ! ";
              }
            break;

            case "ciseaux":

              if (ordiChoice == "papier") {
                var pos = 0;
                botChoix.setAttribute('src', "./img/feuille.png");
                etapeAnim.style.visibility = "visible";
                etapeJoue.style.visibility = "hidden";
                phraseEgal.style.visibility = "hidden";
                matchOrdi.setAttribute('src', "./img/feuille.png");
                matchUser.setAttribute('src', "./img/ciseaux.png");
                myMove();

                // algo sur la petite anim'
                function myMove() {
                  var test = setInterval(frame, 1);
                  function frame() {
                    if (pos == 170) {
                      clearInterval(test);
                    } else {
                      pos++;
                      matchUser.style.top = pos + 'px';
                      matchOrdi.style.bottom = pos + 'px';
                    }
                  }
                }

                setTimeout(myMessage, 1500);

                //suite de l'anim
                function myMessage() {
                  phraseEgal.style.visibility = "visible";
                  phraseEgal.innerHTML = "you win!";
                }

                setTimeout(mettrelepoint, 2000);
                function mettrelepoint() {
                  userPoint++;
                }

                setTimeout(switchToTuJoues, 3000);

                setTimeout(supp, 3000);

              } else if (ordiChoice == "pierre") {
                var pos = 0;
                botChoix.setAttribute('src', "./img/pierre.png");
                etapeAnim.style.visibility = "visible";
                etapeJoue.style.visibility = "hidden";
                phraseEgal.style.visibility = "hidden";
                matchOrdi.setAttribute('src', "./img/pierre.png");
                matchUser.setAttribute('src', "./img/ciseaux.png");
                myMove();

                // algo sur la petite anim'
                function myMove() {
                  var test = setInterval(frame, 1);
                  function frame() {
                    if (pos == 170) {
                      clearInterval(test);
                    } else {
                      pos++;
                      matchUser.style.top = pos + 'px';
                      matchOrdi.style.bottom = pos + 'px';
                    }
                  }
                }

                setTimeout(myMessage, 1500);

                //suite de l'anim
                function myMessage() {
                  phraseEgal.style.visibility = "visible";
                  phraseEgal.innerHTML = "you loose!";
                }

                setTimeout(mettrelepoint, 2000);
                function mettrelepoint() {
                  ordiPoint++;
                }

                setTimeout(switchToTuJoues, 3000);

                setTimeout(supp, 3000);

              } else {
                botChoix.setAttribute('src', "./img/ciseaux.png");
                phraseEgal.style.visibility = "visible";
                phraseEgal.innerHTML = "Egalité! \n Allez on recommence ! ";
              }

            break;

        }

        document.getElementById("userPoint").innerHTML = userPoint;
        document.getElementById("ordiPoint").innerHTML = ordiPoint;



    setTimeout(winorfail, 2000);

    function winorfail() {
      if (ordiPoint === 3) {
      botChoix2.style.visibility = "visible";
      phraseEgal.style.visibility = "visible";
      phraseEgal.innerHTML = "T'as perdu contre un robot, la défaite ! ";
      ordiPoint = 0;
      userPoint = 0;
    }

      if (userPoint === 3) {
        botChoix2.style.visibility = "visible";
        phraseEgal.style.visibility = "visible";
        phraseEgal.innerHTML = "Bravo, t'as gagné mon gars ! ";
        ordiPoint = 0;
        userPoint = 0;
      }
    document.getElementById("userPoint").innerHTML = userPoint;
    document.getElementById("ordiPoint").innerHTML = ordiPoint;
    }


}
