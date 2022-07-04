const usedField=document.querySelector(".usedLetters")
const wrong=document.querySelector("#used")

function validateChar(event) {
  if (event.data.match(validChars)==null) {
    alert("Use somente letras");
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
    wrong.textContent=wrong.textContent+char
  }else if (type==1) {
    let newUsedChar=document.createElement("p");
    newUsedChar.innerHTML=char;
    newUsedChar.classList.add("wrongChar");
    let img=document.createElement("img")
    img.classList.add("redDash");
    newUsedChar.appendChild(img);
    usedField.appendChild(newUsedChar);
  }

  }
