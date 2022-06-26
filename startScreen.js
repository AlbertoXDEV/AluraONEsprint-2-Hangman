const menu=document.querySelector("#start-menu")

const button= document.querySelector('#workplz');
button.addEventListener('mouseup',startgame);

function startgame

function drawWord() {
  getRandomWord();
  var windowFix=keyword;
  keyWord=windowFix;
  for (var i = 0; i < keyWord.length; i++) {
    display.push("_")
  }
  dispayedWord.textContent=display.join(" ");
  playerField.classList.remove('hidden')
}
function getRandomWord() {
  min = Math.ceil(0);
  max = Math.floor(words.length);
  listNumber= Math.floor(Math.random() * (max - min) + min)
  word=words[listNumber];
  keyword=Array.from(word)
  console.log(keyword);
}
