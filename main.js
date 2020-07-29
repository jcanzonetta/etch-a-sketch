const squaresContainer = document.querySelector('#squares-container');

makeSquares(4, 4);

const squares = document.querySelectorAll('.squares');

squares.forEach(colorSquare);

const resetButton = document.querySelector('#reset');

resetButton.addEventListener("click", () => {

})


function setGridSize(rows, columns){
 
}








function colorSquare(e){
    e.addEventListener('mouseenter', () =>{
        e.classList.remove('highlighted');
        e.classList.add('highlight');
    })
    e.addEventListener('mouseleave', () =>{
        e.classList.remove('highlight');
        e.classList.add('highlighted');
    })
}

function makeSquares(rows, columns){
    for(let i=0; i<(rows*columns); i++){
        const newSquare = document.createElement('div');
        newSquare.classList.add('squares');
        squaresContainer.appendChild(newSquare);
    }
}