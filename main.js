
const box = document.querySelectorAll(".box");
const reset = document.querySelector("#btn");
const status = document.querySelector("#status");
let boxes = ["","","","","","","","",""];
let me = 0;
for(let shi of boxes){
    box[me].textContent = "";
    me++;
}
let turn = "X";
let winner ="";
status.textContent = `${turn}'s turn!`;
reset.addEventListener("click", resety);

 function resety(){
    const box = document.querySelectorAll(".box");
const reset = document.querySelector("#btn");
const status = document.querySelector("#status");
let boxes = ["","","","","","","","",""];
let me = 0;
for(let shi of boxes){
    box[me].textContent = "";
    me++;
}
let turn = "X";
let winner ="";
status.textContent = `${turn}'s turn!`;

}

function initGame(){
    boxes.forEach((_val,idx) => {
        // box[idx].textContent = turn;
        box[idx].style.color = turn==="X"?"red":"blue";
        box[idx].addEventListener("click", clickedcell);
    })
}

function arrayModif(ed){
    boxes[ed] = turn;
    winCombos();
}

function clickedcell(e){
    console.log(e.target);
    e.target.textContent = turn;
    const ed = e.target.id;
    arrayModif(ed);
    box[ed].style.color = turn==="X"?"red":"blue";
    turn = turn=="X"?"O":"X";
    if (winner==""){
        status.textContent = `${turn}'s turn!`;
    } else{
        status.textContent = `${winner} wins!`;
    }
    e.target.removeEventListener("click", clickedcell);
}

function winCombos(){
    const winCombo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,4,6],
        [2,5,8]
    ];
    winCombo.forEach((val,idx)=>{
        let trial =1;
        for(let i of val){
           if (boxes[i]===turn&&trial!== 3){
            trial++;
           } else if(boxes[i]===turn&&trial== 3){
            winner = turn;
           }
        }
    }
    )
}
resety();
initGame();
