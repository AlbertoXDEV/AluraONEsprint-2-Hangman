const canvas=document.querySelector("canvas");
const hanged=canvas.getContext("2d");

function hangedState0() {

  hanged.beginPath();
  hanged.fillStyle="black";
  hanged.moveTo(380,20);
  hanged.lineTo(20,20);
  hanged.stroke;
}

function hangedState1() {
  hanged.beginPath();
  hanged.fillStyle("black");
  hanged.arc(200,40,20,0,2*Math.pi);
  //hanged.closePath();
  hanged.Stroke();
}

function hangedState2() {
  hanged.beginPath();
  hanged.fillStyle("black");
//  hanged.closePath();
  hanged.Stroke();
}

function hangedState3() {
  hanged.beginPath();
  hanged.fillStyle("black");
//  hanged.closePath();
  hanged.Stroke();
}

function hangedState4() {
  hanged.beginPath();
  hanged.fillStyle("black");
//  hanged.closePath();
  hanged.Stroke();
}

function hangedState5() {
  hanged.beginPath();
  hanged.fillStyle("black");
//  hanged.closePath();
  hanged.Stroke();
}

function hangedState6() {
  hanged.beginPath();
  hanged.fillStyle("black");
  hanged.closePath();
  hanged.Stroke();
}
