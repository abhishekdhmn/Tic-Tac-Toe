let boxes = document.querySelectorAll(".box");

let container = document.querySelector(".container");

let resetButton = document.querySelector("#reset-btn");

let winner = document.querySelector(".winner");

let turnX = true;

let countClick = 0;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turnX==true){
            box.innerText = "X";
            turnX=false;
        }
        else{
            box.innerText = "O";
            turnX=true;
        }
        box.disabled = true;
        countClick++;
        let winStatus = checkWinner();
        if(countClick===9 && winStatus!=true){
            winner.innerText = "Game is Draw";
            winner.classList.remove("hide");
        }
    });
});

checkWinner = () => {
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText && boxes[pattern[1]].innerText==boxes[pattern[2]].innerText){
                winner.innerText = `Player ${boxes[pattern[0]].innerText} Won`
                winner.classList.remove("hide");
                stopGame();
                return true;
            }
        }
    }
}

stopGame = () => {
    for(box of boxes){
        box.disabled=true;
    }
}

resetButton.addEventListener("click",() => {
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    turnX=true;
    countClick=0;
    winner.classList.add("hide");
});