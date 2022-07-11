const wrongField=document.querySelector("#wrongLetters")
const used=document.querySelector("#used")

function validateChar(event) {
    if (event.data.match(validChars)==null) {
      alert("Use somente letras sem caracteres especiais");
      return false
    }else if (usedChars.indexOf(event.data.toUpperCase())!=-1) {
      alert("Você já usou esta letra")
      return false
    }else {
      return true;
    }
  }

function validateForm() {

    if (newWordInput.value.match(inputValidChars)==null) {
      alert("Por favor insira uma nova palavra");
      return false
    } else if (newWordInput.value.match(inputInvalidChars)!=null) {
      alert("Use somente letras sem caracteres especiais");
      return false
    } else if (newHintInput.value.match(inputValidChars)==null) {
      alert("Por favor insira uma nova dica");
      return false
    } else if (newHintInput.value.match(inputInvalidChars)!=null) {
      alert("Use somente letras sem caracteres especiais");
      return false
    }
    let bool= true
    words.forEach((item, i) => {
      if(newWordInput.value.toUpperCase().indexOf(item.word)!=-1){
        alert("Essa palava já foi cadastrada")
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
