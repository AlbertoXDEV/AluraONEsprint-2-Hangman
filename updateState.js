const pole=document.querySelector("#pole");
const head=document.querySelector("#head");
const torso=document.querySelector("#torso");
const leftArm=document.querySelector("#leftArm");
const rigthArm=document.querySelector("#rigthArm");
const leftLeg=document.querySelector("#leftLeg");
const rigthLeg=document.querySelector("#rigthLeg");
const hanged=document.querySelector("#hangedpng");
const hangDiv=document.querySelector("#hanged")

function updateGame(state) {

    switch (state) {
      case 1:
        head.classList.remove("hidden");
        break;
      case 2:
        torso.classList.remove("hidden");
        break;
      case 3:
        leftArm.classList.remove("hidden");
        break;
      case 4:
        rigthArm.classList.remove("hidden");
        break;
      case 5:
        leftLeg.classList.remove("hidden");
        break;
      case 6:
        rigthLeg.classList.remove("hidden");
        break;
      case 7:
        pole.classList.add("hidden")
        head.classList.add("hidden");
        torso.classList.add("hidden");
        leftArm.classList.add("hidden");
        rigthArm.classList.add("hidden");
        leftLeg.classList.add("hidden");
        rigthLeg.classList.add("hidden");
        hanged.classList.remove("hidden");
        playerField.classList.add('hidden');
        alert("Game Over")
        break;
        case 8:
            playerField.classList.add('hidden')
            hangDiv.classList.add("hidden")
            alert("we are the champions");
          break;
      default:
        pole.classList.remove("hidden")
    }
};
