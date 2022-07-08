const inputValidChars=/[A-Za-z]/g
const inputInvalidChars=/[^A-Za-z]/g
const newWordInput=document.querySelector("#inputNewWord");
const newHintInput=document.querySelector("#inputNewHint");
const submitWrdBtn=document.querySelector("#addWord");
submitWrdBtn.addEventListener("click",function (event) {
  event.preventDefault();
  if (newWordInput.value.match(inputValidChars)!=null&&newWordInput.value.match(inputInvalidChars)==null) {
      if (words.indexOf(newWordInput.value)==-1) {
        words.push({word:newWordInput.value.toUpperCase(),hint:newHintInput.value.toUpperCase()})
        newWordInput.value="";
        newHintInput.value="";
        console.log(words);
    }else {
      alert("Essa palavra já foi cadastrada")
    };
    }else {
    alert("Use somente letras sem caracteres especiais")
  }

});
const altStartBtn=document.querySelector("#altStart");
altStartBtn.addEventListener("click",function (event) {
  event.preventDefault();
  startgame();
});
