var words=[{word:"ABRACADABRA",hint:"CULTURA POP"},
           {word:"GALAXIA",hint:"ESPAÇO"},
           {word:"CIDADE",hint:"LUGAR"},
           {word:"COMPUTADOR",hint:"OBJETO"},
           {word:"ZEUS",hint:"MITOLOGIA"},
           {word:"CAFE",hint:"COMIDA"},
           {word:"CARRO",hint:"OBJETO"},
           {word:"PIZZA",hint:"COMIDA"},
           {word:"SOL",hint:"ESPAÇO"},
           {word:"LOKI",hint:"MITOLOGIA"},
           {word:"SUPERMAN",hint:"CULTURA POP"},
           {word:"MEDICINA",hint:"ÁREA DE ESTUDO"},
           {word:"ENGENHARIA",hint:"ÁREA DE ESTUDO"},];
var keyWord= [];
var hit=0;
var miss=0;
var word=[];
const dispayedWord= document.querySelector('#keyword');
var display =[];
var usedChars=[];
var wrongChars=[];
const validChars= /[A-Za-z]/g;
const menu=document.querySelector("#start-menu");
const altMenu=document.querySelector("#word-list");
const hangman=document.querySelector("#hanged");
const hint=document.querySelector("#hint");

function getRandomWord() {
  word=words[Math.floor(Math.random()*words.length)];
  keyWord=word.word.split("");
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
  hint.textContent="Dica:"+word.hint
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
  tut.textContent="Clique nos traços para começar a jogar"
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
      var idx=keyWord.indexOf(event.data.toUpperCase());
      while (idx != -1) {
          letter.push(idx);
          idx = keyWord.indexOf(event.data.toUpperCase(), idx + 1);
          if (idx==-1) {
            letter.push(idx);
          }
      };

      if (letter.indexOf(-1)!=-1){
        displayCorrect(letter);
        usedChars.push(event.data.toUpperCase());
        drawUsedChars(event.data.toUpperCase(),0)
        if (hit==keyWord.length) {
        updateGame(8);
      };
        }else{
          ++miss;
          usedChars.push(event.data.toUpperCase());
          wrongChars.push(event.data.toUpperCase());
          updateGame(miss);
          drawUsedChars(event.data.toUpperCase(),1);
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

function changeMenu() {
  menu.classList.add("hidden");
  end.classList.add("hidden");
  altMenu.classList.remove("hidden");
  hanged.classList.add("hidden");

}

   const input= document.querySelector('#trialInput');
   input.addEventListener('input',checkChar);

   const startButton= document.querySelector('#start');
   startButton.addEventListener("click",function () {
     startgame();
     displayTutorial()
    }
   );

   const addNewWordButton=document.querySelector('#newWord')
   addNewWordButton.addEventListener("click",changeMenu);

   const restartBtn = document.querySelector('#restart');
   restartBtn.addEventListener("click",function () {
     end.classList.add("hidden");
     winMsg.classList.add("hidden");
     lossMsg.classList.add("hidden");
     startgame();
   } )

   const scndAddBtn = document.querySelector('#newWord2');
   scndAddBtn.addEventListener("click",changeMenu);
