var words=["ABRACADABRA","GALAXIA","CIDADE","COMPUTADOR"]
var keyWord= []
var hit=0
var miss=0
const dispayedWord= document.querySelector('#keyword')
var display =[]
var usedChars=[]
var wrongChars=[]
const validChars= /[A-Z]/g
const menu=document.querySelector("#start-menu")
const altMenu=document.querySelector("#word-list")
const hangman=document.querySelector("#hanged");

function getRandomWord() {
  var word=words[Math.round(Math.random()*words.length)];
  keyWord=word.split("");
};

function drawWord() {
  for (var i=0; i < keyWord.length; i++) {
    let char = document.createElement("span")
    char.setAttribute("id","letter"+i)
    char.classList.add("letter")
    let space = document.createElement("p")
    space.setAttribute("id","space"+i)
    space.textContent=""
    char.appendChild(space)
    let dash = document.createElement("p")
    dash.setAttribute("id","dash"+i)
    dash.textContent="_"
    char.appendChild(dash)
    dispayedWord.appendChild(char)
  }
  input.classList.remove('hidden');
};

function primeGame() {
  altMenu.classList.add("hidden");
  reveal.classList.add("hidden");
  dispayedWord.innerHTML="";
  display=[];
  menu.classList.add("hidden");
  pole.classList.add("hidden")
  head.classList.add("hidden");
  torso.classList.add("hidden");
  leftArm.classList.add("hidden");
  rigthArm.classList.add("hidden");
  leftLeg.classList.add("hidden");
  rigthLeg.classList.add("hidden");
  hanged.classList.add("hidden");
  wrongField.innerHTML="";
  used.innerHTML="";
  usedChars=[];
  wrongChars=[];
  keyWord= [];
  hit=0;
  miss=0;
}

function startgame() {
  primeGame();
  getRandomWord();
  drawWord();
  updateGame();
  playField.classList.remove("hidden");
  hangman.classList.remove("hidden");
};

function checkChar (event) {

    if (event.inputType=="insertText" && validateChar(event)) {
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
        drawUsedChars(event.data,0)
        if (hit==keyWord.length) {
        updateGame(8);
      };
        }else{
          ++miss;
          usedChars.push(event.data);
          wrongChars.push(event.data);
          updateGame(miss);
          drawUsedChars(event.data,1);
        }
      }
    }

function displayCorrect(index) {
  var ltrIdx=0
  var ltrIdxVle=0
  index.forEach((item) => {
    ltrIdxVle=index[ltrIdx]
    if (ltrIdxVle!=-1) {
        let letter= document.getElementById('space'+ltrIdxVle)
        letter.textContent=keyWord[ltrIdxVle]
        ++ltrIdx;
        ++hit;
      }
    });
}

   const input= document.querySelector('#trialInput');
   input.addEventListener('input',checkChar);

   const startButton= document.querySelector('#start');
   startButton.addEventListener("click",startgame);

   const addNewWordButton=document.querySelector('#newWord')
   addNewWordButton.addEventListener("click",function() {
     menu.classList.add("hidden");
     altMenu.classList.remove("hidden");
   });

   const restartBtn = document.querySelector('#restart');
   restartBtn.addEventListener("click",function () {
     end.classList.add("hidden");
     winMsg.classList.add("hidden");
     lossMsg.classList.add("hidden");
     startgame();
   } )

   const scndAddBtn = document.querySelector('#newWord2');
