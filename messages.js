const winMsg = document.querySelector('#win')
const lossMsg = document.querySelector('#loss')

function animateWin() {
  winMsg.classList.remove("hidden");
  setTimeout(function() {
    winMsg.classList.add("pop")
  },250);
}

function animateLoss() {
  lossMsg.classList.remove("hidden");
  setTimeout(function() {
    lossMsg.classList.add("pop")
  },250);
}
