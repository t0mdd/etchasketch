const container = document.querySelector('.container');

for(let i = 1; i <= 4; i++){
  let rowContainerDiv = document.createElement('div');
  rowContainerDiv.classList = 'rowContainer';
  rowContainerDiv.id = `rowContainer${i}`;
  for(let j = 1; j <= 4; j++){
    let gridSquareDiv = document.createElement('div');
    gridSquareDiv.classList = 'gridSquare';
    gridSquareDiv.id = `gridSquare(${j},${i})`;
    rowContainerDiv.appendChild(gridSquareDiv);
  }
  container.appendChild(rowContainerDiv);
}
