var words=["abracadabra","VOID","Zari-chan"]
var keyWord= []
var hit=0
var hanged=0
const dispayedWord= document.querySelector('#keyword')
var display =[]
var usedChars=[]

function getRandomWord() {
  min = Math.ceil(0);
  max = Math.floor(words.length);
  listNumber= Math.floor(Math.random() * (max - min) + min)
  word=words[listNumber];
  keyword=Array.from(word)
  console.log(keyword);
}

function checkChar (event) {
  //DISCARD THIS IF YOU TAKE OFF WINDOW.ONLOAD
    var windowFix=keyword;
    keyWord=windowFix;
    console.log(hit);
    console.log();
    if (hit==keyWord.length) {
      alert("we are the champions");
      return ;
    }

    if (event.inputType=="insertText" && usedChars.indexOf(event.data)==-1) {
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
      } else if (letter.indexOf(-1)==-1) {
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
function drawWord() {
  var windowFix=keyword;
  keyWord=windowFix;
  for (var i = 0; i < keyWord.length; i++) {
    display.push("_")
  }
  dispayedWord.textContent=display.join(" ");
}

   window.onload=getRandomWord;

   const playerField= document.querySelector('#trialInput');
   playerField.addEventListener('input',checkChar);

   const button= document.querySelector('#workplz');
   button.addEventListener('mouseup',drawWord);
