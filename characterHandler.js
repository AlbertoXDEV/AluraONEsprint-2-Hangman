const wrongField=document.querySelector("#wrongLetters")
const used=document.querySelector("#used")

function validateChar(event) {
  if (event.data.match(validChars)==null) {
    alert("Use somente letras maiúsculas");
    return false
  }else if (usedChars.indexOf(event.data)!=-1) {
    alert("Você já usou esta letra")
    return false
  }else {
    return true;
  }

}

function drawUsedChars(char,type) {

  if (type==0) {
    used.textContent=used.textContent+char
  }else if (type==1) {
    let newUsedChar=document.createElement("p");
    newUsedChar.innerHTML=char;
    newUsedChar.classList.add("wrongChar");
    let img=document.createElement("img")
    img.classList.add("redDash");
    newUsedChar.appendChild(img);
    wrongField.appendChild(newUsedChar);
  }

  }
