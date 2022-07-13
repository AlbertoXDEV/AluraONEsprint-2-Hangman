const inputValidChars=/[A-Za-z]/g
const inputInvalidChars=/[^A-Za-z\Ç\ç]/g
const newWordInput=document.querySelector("#inputNewWord");
const newHintInput=document.querySelector("#inputNewHint");
const submitWrdBtn=document.querySelector("#addWord");
submitWrdBtn.addEventListener("click",function (event) {

  event.preventDefault();
  if (validateForm()) {
        words.push({word:newWordInput.value.toUpperCase(),hint:newHintInput.value.toUpperCase()},)
        newWordInput.value="";
        newHintInput.value="";
    };
  }
);
const altStartBtn=document.querySelector("#altStart");
altStartBtn.addEventListener("click",function (event) {
  event.preventDefault();
  startgame();
});
