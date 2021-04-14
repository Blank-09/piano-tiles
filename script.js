const start = document.querySelector(".start");
const game = document.querySelector("#game");
const sco = document.getElementById("score");
const audio = document.getElementById("audio");
const ply = document.getElementById("play");
const out = document.getElementById("out");
const results = document.getElementById("result");
const result_box = document.querySelector(".result_box");
const restart = result_box.querySelector(".restart");

let a;
let tos = 2400;
let bool1 = (bool2 = bool3 = bool4 = true);
var count = 1;
var score = 0;
var step = 0;
var mar = randomMargin(), mar2;

function viewResult() {
  game.style.display = "none";
  results.play();
  result_box.classList.add("activeResult");
}

restart.onclick = () => {
  start.style.display = "block";
  result_box.classList.remove("activeResult");
  sco.innerText = 0;
  audio.currentTime = 0;
};

function startAudio() {
  audio.play();
}
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.play();
});

function speed(e) {
  a = setInterval(appendDiv, e);
}
function reset() {
  bool1 = bool2 = bool3 = bool4 = true;
}
function outs() {
  audio.pause();
  out.play();
  setTimeout(viewResult, 1500);
}

function appendDiv() {
  var ob = document.createElement("img");

  do {
    mar2 = randomMargin();
  } while (mar == mar2);
  {
    mar = mar2;
  }

  ob.src = `C:/Users/priya/OneDrive/Desktop/Piano Tiles (Genisis)/(${
    Math.floor(Math.random() * 9) + 1
  }).jpg`;

  ob.style.marginLeft = mar2 + "%";
  setTimeout(moveDown, 100, ob);
  ob.onclick = () => {
    ob.style.background = "rgba(0,0,0,0.2)";
    score++;
    sco.innerText = score;
  };
  if (score >= 70 && score < 150) step = 1;
  document.getElementById("tiles").prepend(ob);
}

function randomMargin() {
  return 25 * Math.floor(Math.random() * 4);
}

function moveDown(e) {
  e.classList.add("move");
  if (bool1 == true) {
    clearInterval(a);
    speed(300);
    reset();
    bool1 = false;
    tos = 1600;
  }
  setTimeout(removeDiv, tos, e);
}

function removeDiv(e) {
  if (score == 75) {
    clearInterval(a);
    outs();
  }
  e.remove();
}

start.querySelector("button").onclick = () => {
  ply.play();
  game.style.display = "block";
  start.style.display = "none";
  score = 0;
  speed(400);
  setTimeout(startAudio, 1000);
};
