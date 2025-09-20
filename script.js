let boxes = document.querySelectorAll(".box");
let winner = document.querySelector("#show-winner");
let reset = document.querySelector("#reset");
const Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of Patterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        disabledBox();
        showWinner(val1);
      }
    }
  }
};

const disabledBox = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  winner.innerText = "";
  turnO = true;
});

const showWinner = (val1) => {
  winner.innerText = `${val1} Winner`;
};
