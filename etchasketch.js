const container = document.querySelector('.container');

for(let i = 1; i <= 40; i++){
  let rowContainerDiv = document.createElement('div');
  rowContainerDiv.classList = 'rowContainer';
  rowContainerDiv.id = `rowContainer${i}`;
  for(let j = 1; j <= 40; j++){
    let gridSquareDiv = document.createElement('div');
    gridSquareDiv.classList = 'gridSquare';
    gridSquareDiv.id = `gridSquare(${j},${i})`;
    gridSquareDiv.addEventListener('mouseenter', 
      () => gridSquareDiv.classList.add('gridHover'));
    rowContainerDiv.appendChild(gridSquareDiv);
  }
  container.appendChild(rowContainerDiv);
}
