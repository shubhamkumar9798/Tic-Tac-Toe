let boxes = document.querySelectorAll(".box");
let resetButton =document.querySelector("#reset");
let win = document.querySelector(".displayWinner");
let winMsg = document.querySelector("#winner");

let turn_o = true;

const winningPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn_o === true) {
            box.innerText = "O";
            turn_o = false;
        }else{
            box.innerText = "X";
            turn_o = true;
        }
        box.disabled = true;

        checkWinner();
    })
}
)

const diasabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    winMsg.innerText = `congratulations, Winner is ${winner}`;
    win.classList.remove("hide");
    diasabledBoxes();
}



const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let position1= boxes[pattern[0]].innerText;
        let position2= boxes[pattern[1]].innerText;
        let position3= boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
        }
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn_o = true;
    enableBoxes();
    win.classList.add("hide");
}

resetButton.addEventListener("click", resetGame);