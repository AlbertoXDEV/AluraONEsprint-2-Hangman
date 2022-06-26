var words=["abracadabra","VOID","Zari-chan"]
var keyWord= []
var hit=0
var hanged=0
const dispayedWord= document.querySelector('#keyword')
var display =[]
var usedChars=[]
const validChars= /[A-Za-z]/g


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
