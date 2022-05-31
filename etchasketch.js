const container = document.querySelector('.container');
const changeDimensionsBtn = 
      document.querySelector('.changeDimensions');

changeDimensionsBtn.addEventListener('click',changeDimensions);

function addGridSquares(noRows,noCols){
  for(let i = 1; i <= noCols; i++){
    let rowContainerDiv = document.createElement('div');
    rowContainerDiv.classList = 'rowContainer';
    rowContainerDiv.id = `rowContainer${i}`;
    for(let j = 1; j <= noRows; j++){
      let gridSquareDiv = document.createElement('div');
      gridSquareDiv.classList = 'gridSquare';
      gridSquareDiv.id = `gridSquare(${j},${i})`;
      gridSquareDiv.addEventListener('mouseenter', 
        () => gridSquareDiv.classList.add('gridHover'));
      rowContainerDiv.appendChild(gridSquareDiv);
    }
    container.appendChild(rowContainerDiv);
  }
}

function isInteger(num){
  return typeof num === 'number' && num === Math.floor(num);
}

function validDimension(dim){
  return isInteger(dim) && dim > 0 && dim <= 100;
}

function changeDimensions(){
  let noRows, noCols;
  while(!validDimension(noRows)){
    noRows = +prompt('Enter the number of rows (Must be an integer ' +
                     'between 1 and 100): ');
  }
  while(!validDimension(noCols)){
    noCols = +prompt('Enter the number of columns (Must be an ' +
                     'integer between 1 and 100): ');
  }
  container.innerHTML = ''; //remove its content
  addGridSquares(noRows,noCols);
}

addGridSquares(40,40);
