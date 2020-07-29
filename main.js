const squaresContainer = document.querySelector('#squares-container');

makeSquares(4, 4);

const squares = document.querySelectorAll('.squares');

squares.forEach(colorSquare);

const resetButton = document.querySelector('#reset');

resetButton.addEventListener("click", resetGrid)

function resetGrid(){
    let rows;
    let columns;    

    do{
        rows = parseInt(prompt("","rows"), 10);
    } while (isNaN(rows) || rows < 0 || rows > 10000);
    do{
        columns = parseInt(prompt("","columns"), 10);
    } while (isNaN(columns) || columns < 0 || columns > 10000);

    squaresContainer.innerHTML = "";
    setGridSize(rows,columns);
    makeSquares(rows,columns);

    const squares = document.querySelectorAll('.squares');
    // squares.forEach(setSquareSizes(rows, columns), e);
    squares.forEach(colorSquare);
}

// function setSquareSizes(rows, columns){
//     console.log(e);
//     e.style.height = "rows";
//     e.style.width = "columns";
// }

function setGridSize(rows, columns){
    let rowSizes = 100/(rows+0.5);
    let columnSizes = 100/(columns+0.5);

    squaresContainer.style.gridTemplateRows = `repeat(${rows}, ${rowSizes}vmin)`;
    squaresContainer.style.gridTemplateColumns = `repeat(${columns}, ${columnSizes}vmin)`;
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