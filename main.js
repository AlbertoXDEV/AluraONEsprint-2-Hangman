var words=["abracadabra"]
var keyWord= []
var hit=0
var miss=0
const dispayedWord= document.querySelector('#keyword')
var display =[]
var usedChars=[]
var wrongChars=[]
const validChars= /[A-Za-z]/g
const menu=document.querySelector("#start-menu")
const altMenu=document.querySelector("#word-list")
const hangman=document.querySelector("#hanged")

function getRandomWord() {
  word=words[Math.floor(Math.random())];
  keyWord=word.split("");
  console.log(keyWord);
};

function drawWord() {
  for (var i=0; i < keyWord.length; i++) {
    display.push("_")
  };
  dispayedWord.textContent=display.join(" ");
  playerField.classList.remove('hidden');
};

function startgame() {
  altMenu.classList.add("hidden");
  getRandomWord();
  drawWord();
  updateGame();
  menu.classList.add("hidden");
  hangman.classList.remove("hidden");
};

function checkChar (event) {

    if (event.inputType=="insertText" && usedChars.indexOf(event.data)==-1 && validateChar(event)) {
      var letter=[]
      var idx=keyWord.indexOf(event.data);
      while (idx != -1) {
          letter.push(idx);
          idx = keyWord.indexOf(event.data, idx + 1);
          if (idx==-1) {
            letter.push(idx);
          }
      };

      if (letter.indexOf(-1)!=-1){
        displayCorrect(letter);
        usedChars.push(event.data);
        updateGame();
        }else{
          ++miss;
          updateGame(miss);
        }
      }
    }

function displayCorrect(index) {
    var ltrIdx=0
    var ltrIdxVle=0
    index.forEach((item) => {
      ltrIdxVle=index[ltrIdx]
      if (ltrIdxVle!=-1) {
        display.splice(ltrIdxVle,1,keyWord[ltrIdxVle]);
        dispayedWord.textContent=display.join(" ");
        ++ltrIdx;
        ++hit;
      }
    });
}

   const playerField= document.querySelector('#trialInput');
   playerField.addEventListener('input',checkChar);

   const startButton= document.querySelector('#start');
   startButton.addEventListener("click",startgame);

   const addNewWordButton=document.querySelector('#newWord')
   addNewWordButton.addEventListener("click",function() {
     menu.classList.add("hidden");
     altMenu.classList.remove("hidden");
   });
