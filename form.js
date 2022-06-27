const inputValidChars=/[A-Z]/g
const inputInvalidChars=/[^A-Z]/g
const newWordInput=document.querySelector("#inputNewWord");
const submitWrdBtn=document.querySelector("#formAdd");
submitWrdBtn.addEventListener("click",function (event) {
  event.preventDefault();
  if (newWordInput.value.match(inputValidChars)!=null&&newWordInput.value.match(inputInvalidChars)==null) {
    console.log(words);
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
const formStartBtn=document.querySelector("#formStart");
formStartBtn.addEventListener("click",function (event) {
  event.preventDefault();
  startgame();
});
