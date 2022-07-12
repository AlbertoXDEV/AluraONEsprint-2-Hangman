const wrongField=document.querySelector("#wrongLetters")
const used=document.querySelector("#used")

function validateChar(event) {
    if (event.data.match(validChars)==null) {
      errorMsg("Use somente letras sem caracteres especiais",1);
      return false
    }else if (usedChars.indexOf(event.data.toUpperCase())!=-1) {
      errorMsg ("Você já usou esta letra",1)
      return false
    }else {
      return true;
    }
  }

function validateForm() {

    if (newWordInput.value.match(inputValidChars)==null) {
      errorMsg("Por favor insira uma nova palavra",0);
      return false
    } else if (newWordInput.value.match(inputInvalidChars)!=null) {
      errorMsg("Use somente letras sem caracteres especiais",0);
      return false
    } else if (newHintInput.value=="") {
      errorMsg("Por favor insira uma nova dica",0);
      return false
    } else if (newHintInput.value.match(inputInvalidChars)!=null) {
      errorMsg("Use somente letras sem caracteres especiais",0);
      return false
    }
    let bool= true
    words.forEach((item, i) => {
      if(newWordInput.value.toUpperCase().indexOf(item.word)!=-1){
        errorMsg("Essa palava já foi cadastrada",0)
        bool= false
      }
    });
    if(bool){
      return true
    }
  }

function drawUsedChars(char,type) {

  switch (type) {
    case 1:
      let newUsedChar=document.createElement("p");
      newUsedChar.innerHTML=char;
      newUsedChar.classList.add("wrongChar");
      let img=document.createElement("img");
      img.setAttribute("src","imgs/wrongDash.png");
      img.classList.add("redDash")
      newUsedChar.appendChild(img);
      wrongField.appendChild(newUsedChar);
      break;

    default:
      used.textContent=used.textContent+char;
  }
}
