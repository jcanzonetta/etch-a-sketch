const squaresContainer = document.querySelector('#squares-container');

makeSquares(4, 4);

const squares = document.querySelectorAll('.squares');

squares.forEach((square) =>{
    square.addEventListener('mouseenter', () =>{
        square.classList.remove('highlighted');
        square.classList.add('highlight');
    })
    square.addEventListener('mouseleave', () =>{
        square.classList.remove('highlight');
        square.classList.add('highlighted');
    })
})

const resetButton = document.querySelector('#reset');

resetButton.addEventListener("click", () => {

})


function setGridSize(rows, columns){
 
}









function makeSquares(rows, columns){
    for(let i=0; i<(rows*columns); i++){
        const newSquare = document.createElement('div');
        newSquare.classList.add('squares');
        squaresContainer.appendChild(newSquare);
    }
}