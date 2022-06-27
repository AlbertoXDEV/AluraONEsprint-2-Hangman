const validChars=/[A-Z]/g
const newWordInput=document.querySelector("#inputNewWord");
const submitWrdBtn=document.querySelector("#formAdd");
submitWrdBtn.addEventListener("click",function (event) {
  event.preventDefault();

  if (newWordInput.value.match(validChars)!=null) {
    words.push(newWordInput.value)
    console.log(words);
  }

});
const formStartBtn=document.querySelector("#formStart");
formStartBtn.addEventListener("click",function (event) {
  event.preventDefault();
  startgame();
});
