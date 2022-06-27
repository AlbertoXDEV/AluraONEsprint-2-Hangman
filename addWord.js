const inputValidChars=/[A-Z]/g
const inputInvalidChars=/[^A-Z]/g
const newWordInput=document.querySelector("#inputNewWord");
const submitWrdBtn=document.querySelector("#addWord");
submitWrdBtn.addEventListener("click",function (event) {
  event.preventDefault();
  if (newWordInput.value.match(inputValidChars)!=null&&newWordInput.value.match(inputInvalidChars)==null) {
      if (words.indexOf(newWordInput.value)==-1) {
        words.push(newWordInput.value)
        console.log(words);
    }else {
      alert("Essa palavra já foi cadastrada")
    };
    }else {
    alert("Use somente letras maiusculas sem caracteres especiais")
  }

});
const altStartBtn=document.querySelector("#altStart");
altStartBtn.addEventListener("click",function (event) {
  event.preventDefault();
  startgame();
});
