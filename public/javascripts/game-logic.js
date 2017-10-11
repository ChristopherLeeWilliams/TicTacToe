
let isXTurn = true; 

function checkArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        // check horizontals
        if (i < (arr.length-2)) {
            if(arr[i] && arr[i+1] && arr[i+2]) { return true; }
        }
        // check verticals and diagonals
        if (i < 3) {
            if(arr[i] && arr[i+3] && arr[i+6]) { return true; }
            if(arr[i] && arr[i+2] && arr[i+4]) { return true; }
        }
    }
    return false;
}

function checkForWinner() {
    let squares = document.getElementsByClassName("square");
    let size = squares.length;
    
    let Os = [];
    let Xs = [];
    
    var val;
    
    for (let i = 0; i < size; i++) {
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
        display.innerHTML = "";
    }
}

function handleClick(e) {
    if (e.target.innerHTML) 
        return; 
        
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