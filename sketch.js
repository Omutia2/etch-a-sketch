let square;
let squareRow = 10;
let totalSquares = 256;
let gridContainer = document.querySelector('#container');
let eachSquare = document.querySelectorAll('.square-grid');

gridContainer.style.display = "grid";
gridContainer.style.border = "solid";
gridContainer.style.width = "700px";
gridContainer.style.height = "700px";
gridContainer.style.margin = "auto";
gridContainer.style.marginTop = "30px";

makeGrid(16,16);  

function makeGrid(rows, columns){
    gridContainer.style.gridTemplateColumns = "repeat(" + columns + ", 1fr)";
        gridContainer.style.gridTemplateRows = "repeat(" + rows + ", 1fr)";
        totalNumOfSquares = rows * columns;
        
    for(let row = 0; row < totalNumOfSquares; row++){
        squareDiv = document.createElement('div');
        document.getElementById("container").append(squareDiv);
        squareDiv.classList.add("square-grid");
        squareDiv.style.border = "solid";
        squareDiv.style.borderWidth = "1px";
        squareDiv.style.display = "grid";
        squareDiv.style.borderColor = "gray";
    }
    eachSquareDiv = document.querySelectorAll(".square-grid");
    eachSquareDiv.forEach(eachSquareDiv => {  
        eachSquareDiv.addEventListener("mouseover", () => {
             eachSquareDiv.style.backgroundColor = "black";
        })
    });
   
}

let clearButton = document.querySelector("button");

clearButton.addEventListener("click", function(){
    stringOfSquaresRow = prompt("How many squares would you like?");
    let numOfSquaresRow = Number(stringOfSquaresRow);
    reset();
    makeGrid(numOfSquaresRow, numOfSquaresRow); 
    
    });
 
eachSquareDiv = document.querySelectorAll(".square-grid");
eachSquareDiv.forEach(eachSquareDiv => {  
        eachSquareDiv.addEventListener("mouseover", () => {
             eachSquareDiv.style.backgroundColor = "black";
        })
    });

function reset(){
    eachSquareDiv.forEach(function(eachSquareDiv){
        eachSquareDiv.remove();
    });
}