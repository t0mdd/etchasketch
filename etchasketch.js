const container = document.querySelector('.container');
const changeDimensionsBtn = 
      document.querySelector('.changeDimensions');

changeDimensionsBtn.addEventListener('click',changeDimensions);

function setup(noRows,noCols){
  for(let i = 1; i <= noCols; i++){
    let rowContainerDiv = document.createElement('div');
    rowContainerDiv.classList = 'rowContainer';
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

function intensifyColour(hslData,percentage){
  hslData.lightness -= percentage;
  hslData.saturation += percentage/2;
  return hslData;
}

function changeColour(gridSquare){
  if (gridSquare.classList.contains('hovered')){
    let newColour = intensifyColour(gridSquare['data-hsl'],10);
    gridSquare['data-hsl'] = newColour;
    gridSquare.style.backgroundColor = hslString(newColour);
  }
  else {
    let newColour = {hue:Math.random()*24, 
                     saturation:50, 
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
    userInput = prompt('Enter the number of rows (Must be an ' +
                       'integer between 1 and 100): ');
    if (userInput === null) return;
    else noRows = +userInput;
  }
  while(!validDimension(noCols)){
    userInput = prompt('Enter the number of columns (Must be an ' +
                       'integer between 1 and 100): ');
    if (userInput === null) return;
    else noCols = +userInput;
  }
  container.innerHTML = ''; //remove its content
  setup(noRows,noCols);
}

setup(20,20);
