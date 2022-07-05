const winMsg = document.querySelector('#win');
const lossMsg = document.querySelector('#loss');
const end = document.querySelector('#endgame');
const reveal = document.querySelector("#final");

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
