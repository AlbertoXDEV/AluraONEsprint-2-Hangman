function updateGame() {
  if (hit==keyWord.length) {
    playerField.classList.add('hidden')
    alert("we are the champions");
    return ;
  }else {
    const states=[{hangedState1()},{hangedState2()},{hangedState3()},{hangedState4()},{hangedState5()},{hangedState6()},{hangedState7()},{}]
    states[miss]
  }
};

function hangedState0() {
const pole=document.querySelector("#pole");
pole.classList.remove("hidden")
};

function hangedState1() {
const head=document.querySelector("#head");
head.classList.remove("hidden")
};

function hangedState2() {
const torso=document.querySelector("#torso");
torso.classList.remove("hidden")
};

function hangedState3() {
const leftArm=document.querySelector("#leftArm");
leftArm.classList.remove("hidden")
};

function hangedState4() {
const rigthArm=document.querySelector("#rigthArm");
rigthArm.classList.remove("hidden")
};

function hangedState5() {
const leftLeg=document.querySelector("#leftLeg");
leftLeg.classList.remove("hidden")
};

function hangedState6() {
const rigthLeg=document.querySelector("#rigthLeg");
rigthLeg.classList.remove("hidden")
};

function hangedState7() {
const hanged=document.querySelector("#hangedpng");
hanged.classList.remove("hidden")
};
