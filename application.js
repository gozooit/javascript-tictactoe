const gameBoard = (() => {
  let firstRow = ["","",""];
  let secondRow = ["","",""];
  let thirdRow = ["","",""];
  const board = [firstRow, secondRow, thirdRow];
  const addSymbol = (symbol, positionNumber, rowNumber) => {
    position = convertPosition(positionNumber);
    row = convertRow(rowNumber);
    !row[position] ? row[position] = symbol : console.log('error');
  };
  const convertRow = (rowNumber) => {
    switch (rowNumber) {
      case 1:
        return firstRow;
      case 2:
        return secondRow;
      case 3:
        return thirdRow;
    };
  };
  const convertPosition = (positionNumber) => positionNumber - 1;
  return {
    firstRow,
    secondRow,
    thirdRow,
    board,
    addSymbol,
  };
})();

const displayController = (() => {
  const create = () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'board-container');
    container.setAttribute('class', 'container');
  
    gameBoard.board.forEach((row, rowIndex) => {
      const rowElement = document.createElement('div');
      rowElement.setAttribute('class', 'row');
      row.forEach((cell, cellIndex) => {
        const cellElement = document.createElement('div');
        cellElement.setAttribute('class', 'cell');
        cellElement.innerText = cell;
        cellElement.addEventListener('click', () => {
          // Add the current player's symbol to the cell
          gameBoard.addSymbol(currentPlayer.symbol, cellIndex + 1, rowIndex + 1);
          // Update the cell's text to display the symbol
          cellElement.innerText = currentPlayer.symbol;
        });
        rowElement.appendChild(cellElement);
      });
      container.appendChild(rowElement);
    });
    document.body.appendChild(container);
  };
  const update = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      cell.innerText = gameBoard.board[row][col];
    });
  };
  return {
    create,
    update,
  }
})();

const Player = (name, symbol) => {
  return { name, symbol };
};

const theGame = (() => {

})();

displayController.create();

const p1 = Player('gozoo', 'X');
const p2 = Player('gwen', 'O');

console.log(gameBoard.board);
gameBoard.addSymbol(p1.symbol, 1, 1);
console.log(gameBoard.board);
gameBoard.addSymbol(p2.symbol, 2, 2);
console.log(gameBoard.board);
gameBoard.addSymbol(p1.symbol, 3, 3);
console.log(gameBoard.board);
gameBoard.addSymbol(p2.symbol, 1, 3);
console.log(gameBoard.board);
console.log(gameBoard.firstRow);

displayController.update();
