
let isXTurn = true; 
let turnCount = 0;
function checkArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        // check horizontals
        if( (arr[0]&&arr[1]&&arr[2]) || (arr[3]&&arr[4]&&arr[5]) || (arr[6]&&arr[7]&&arr[8])) {
            return true;
        } else if ( (arr[0]&&arr[3]&&arr[6]) || (arr[1]&&arr[4]&&arr[7]) || (arr[2]&&arr[5]&&arr[8])) {
            return true;
        } else if ( (arr[0]&&arr[4]&&arr[8]) || (arr[2]&&arr[4]&&arr[6])) {
            return true;
        }
    }
    return false;
}

function checkForWinner() {
    let squares = document.getElementsByClassName("square");
    let Os = [];
    let Xs = [];
    var val;
    
    for (let i = 0; i < squares.length; i++) {
        val = squares[i].innerHTML;
        if (val === "X") {
            Xs[i] = true;
            Os[i] = false;
        } else if (val === "O") {
            Os[i] = true;
            Xs[i] = false;
        } else {
            Xs[i] = false;
            Os[i] = false;
        }
    }
    let display = document.getElementById("winner");
    if(checkArray(Xs)) {
        display.innerHTML = "X's Win!";
    } else if(checkArray(Os)) {
        display.innerHTML = "O's Win!";
    } else {
        if(turnCount >= 9) {
            display.innerHTML = "Cat's Game!";   
        } else {
            display.innerHTML = "";    
        }
    }
}

function handleClick(e) {
    if (e.target.innerHTML) 
        return; 
    turnCount += 1;
    e.target.innerHTML = isXTurn ? "X" : "O";
    isXTurn = !isXTurn; 
    showGameStatus();
    checkForWinner();
}


function showGameStatus() {
    let status = document.getElementsByClassName("status")[0]; 
    status.innerHTML =  "Next player to move: " + (isXTurn ? "X" : "O");  
}

function showWinner() {
    let squares = document.getElementsByClassName("square"); 
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", handleClick );
    }
}


document.addEventListener("DOMContentLoaded", function(event) { 
    let squares = document.getElementsByClassName("square"); 
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", handleClick );
    }
    showGameStatus(); 
    
    document.getElementById("page-refresh").addEventListener("click", function() {
       window.location.href = "/"; 
    });
  
}); 