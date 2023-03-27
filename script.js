console.log("welcome to TicTacToe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.wav");

let turn = "X";

let gameFinish = false;

// function to change the turn , if x hai to O or vice versa
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// func to check for a win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    // console.log(boxtexts[e[0]].innerText);
    // console.log(boxtexts[e[1]].innerText);
    // console.log(boxtexts[e[2]].innerText);
    const firstBox = e[0];
    const secondBox = e[1];
    const thirdBox = e[2];
    if (
      boxtexts[firstBox].innerText === boxtexts[secondBox].innerText &&
      boxtexts[secondBox].innerText === boxtexts[thirdBox].innerText &&
      boxtexts[firstBox].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " " + "WON";

      gameFinish = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "100px";
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();

      if (!gameFinish) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + " " + turn;
      }
    }
  });
});

// add onclick listner to reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameFinish = false;
  document.getElementsByClassName("info")[0].innerText =
    "Turn for" + " " + turn;
  document.querySelector(".line").style.width = "0";
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
