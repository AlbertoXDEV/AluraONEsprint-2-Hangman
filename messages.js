const winMsg = document.querySelector('#win');
const lossMsg = document.querySelector('#loss');
const end = document.querySelector('#endgame');

function animateWin() {
  end.classList.remove("hidden");
  winMsg.classList.remove("hidden");
  setTimeout(function() {
    winMsg.classList.add("pop")
  },250);
}

function animateLoss() {
  end.classList.remove("hidden");
  lossMsg.classList.remove("hidden");
  setTimeout(function() {
    lossMsg.classList.add("pop")
  },250);
}
