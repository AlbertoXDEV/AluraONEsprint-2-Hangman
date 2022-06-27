var words=["abracadabra"]
var keyWord= []
var hit=0
var hanged=0
const dispayedWord= document.querySelector('#keyword')
var display =[]
var usedChars=[]
const validChars= /[A-Za-z]/g
const menu=document.querySelector("#start-menu")
const form=document.querySelector("#word-form")

function getRandomWord() {
  min = Math.ceil(0);
  max = Math.floor(words.length);
  listNumber= Math.floor(Math.random() * (max - min) + min);
  word=words[listNumber];
  keyWord=Array.from(word);
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
  form.classList.add("hidden");
  getRandomWord();
  drawWord();
  menu.classList.add("hidden");
};

function checkChar (event) {

    if (event.inputType=="insertText" && usedChars.indexOf(event.data)==-1) {
      if (event.data.match(validChars)==null) {
        alert("Use somente letras");
        return
      }
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
        if (hit==keyWord.length) {
          playerField.classList.add('hidden')
          alert("we are the champions");
          return ;
        }
      } else if (letter.indexOf(-1)==-1) {
        if (hit==keyWord.length) {
          console.log(keyword);
          playerField.classList.add('hidden')
          alert("we are the champions");
          return ;
        }
        ++hanged;
      }
} }

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
     form.classList.remove("hidden");
   });
