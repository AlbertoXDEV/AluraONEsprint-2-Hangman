const winMsg = document.querySelector('#win');
const lossMsg = document.querySelector('#loss');
const end = document.querySelector('#endgame');
const reveal = document.querySelector("#final");
const tut = document.querySelector('#tutorial');
const pop = document.querySelector('#pop-up');
const errormsg = document.querySelector('#popmsg');

function animateWin() {
  end.classList.remove("hidden");
  lossMsg.classList.add("hidden");
  winMsg.classList.remove("hidden");
  reveal.classList.remove("hidden");
  reveal.textContent="A palavra realmente era "+keyWord.join("");
  setTimeout(function() {
    winMsg.classList.add("pop");
  },250);
}

function animateLoss() {
  end.classList.remove("hidden");
  winMsg.classList.add("hidden");
  lossMsg.classList.remove("hidden");
  reveal.classList.remove("hidden");
  reveal.textContent="A palavra era "+keyWord.join("");
  setTimeout(function() {
    lossMsg.classList.add("pop");
  },250);
}

function displayTutorial() {
  tut.classList.remove("hidden");
  setTimeout(function () {
    tut.textContent= "Você tem 7(sete) tentativas";
    setTimeout(function () {
      tut.classList.add("hidden");
      tut.textContent="Clique nos traços para começar a jogar";
    },2500);
  },2500);
}

function errorMsg(error,div) {

  switch (div) {
    case 0:
      pop.classList.remove("hidden");
      setTimeout(function () {
        pop.classList.add("pop");
        altMenu.classList.add("hidden");
        errormsg.textContent=error
      },100)

      setTimeout(function () {
      pop.classList.remove("pop");
      pop.classList.add("hidden");
      altMenu.classList.remove("hidden");
      },2000)
      break;
    default:
      pop.classList.remove("hidden");
      setTimeout(function () {
        pop.classList.add("pop");
        hangman.classList.add("hidden");
        playField.classList.add("hidden");
        errormsg.textContent=error
      },100)

      setTimeout(function () {
      pop.classList.remove("pop");
      pop.classList.add("hidden");
      hangman.classList.remove("hidden");
      playField.classList.remove("hidden");
      },2000)
  }

}
