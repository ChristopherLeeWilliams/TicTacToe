
let isXTurn = true; 

function handleClick(e) {
    if (e.target.innerHTML) 
        return; 
        
    e.target.innerHTML = isXTurn ? "X" : "O";
    isXTurn = !isXTurn; 
    showGameStatus(); 
}


function showGameStatus() {
    let status = document.getElementsByClassName("status")[0]; 
    status.innerHTML =  "Next player to move: " + (isXTurn ? "X" : "O");  
}


document.addEventListener("DOMContentLoaded", function(event) { 
    let squares = document.getElementsByClassName("square"); 
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", handleClick )
    }
    
    showGameStatus(); 
  
}); 