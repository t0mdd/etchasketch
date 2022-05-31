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
      gridSquareDiv.dataset.hsl;
      gridSquareDiv.addEventListener('mouseenter', 
        () => changeColour(gridSquareDiv));
      rowContainerDiv.appendChild(gridSquareDiv);
    }
    container.appendChild(rowContainerDiv);
  }
}

function hslString(hslData){
  return `hsl(${hslData.hue},${hslData.saturation}%,` + 
    `${hslData.lightness}%)`;
}

function darkenColour(hslData,percentage){
  hslData.lightness -= percentage;
  return hslData;
}

function changeColour(gridSquare){
  if (gridSquare.classList.contains('hovered')){
    let darkenedColour = darkenColour(gridSquare['data-hsl'],10);
    gridSquare['data-hsl'] = darkenedColour;
    gridSquare.style.backgroundColor = hslString(darkenedColour);
  }
  else {
    let newColour = {hue:Math.random()*360, 
                     saturation:100, 
                     lightness:90};
    gridSquare['data-hsl'] = newColour;
    gridSquare.style.backgroundColor = hslString(newColour);
    gridSquare.classList.add('hovered');
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
    noRows = +prompt('Enter the number of rows (Must be an ' +
                     'integer between 1 and 100): ');
  }
  while(!validDimension(noCols)){
    noCols = +prompt('Enter the number of columns (Must be an ' +
                     'integer between 1 and 100): ');
  }
  container.innerHTML = ''; //remove its content
  addGridSquares(noRows,noCols);
}

addGridSquares(10,10);
