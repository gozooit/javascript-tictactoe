const gameBoard = (() => {
  let firstRow = ["","",""];
  let secondRow = ["","",""];
  let thirdRow = ["","",""];
  const board = [firstRow, secondRow, thirdRow];
  const addSymbol = (symbol, positionNumber, rowNumber) => {
    position = convertPosition(positionNumber);
    row = convertRow(rowNumber);
    !row[position] ? row[position] = symbol : console.log('error');
    displayController.update();
  };
  const reset = () => {
    firstRow = ["","",""];
    secondRow = ["","",""];
    thirdRow = ["","",""];
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
    reset,
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
  };
})();

const Player = (name, symbol) => {
  return { name, symbol };
};

const game = (() => {
  const start = () => {

  }
  const checkWin = (symbol) => {
    if (rowWin(symbol) || columnWin(symbol) || diagonalWin(symbol)) {
      return true;
    } else {
      return false;
    };
  };
  const rowWin = (symbol) => {
    return gameBoard.board.some(row => (row.every(cell => cell === symbol)));
  };
  const columnWin = (symbol) => {
    for (let i = 0; i < 3; i++) {
      if ([gameBoard.firstRow[i], gameBoard.secondRow[i], gameBoard.thirdRow[i]].every(cell => cell === symbol)) {
        return true;
      };      
    };
  };
  const diagonalWin = (symbol) => {
    if ([gameBoard.firstRow[0], gameBoard.secondRow[1], gameBoard.thirdRow[2]].every(cell => cell === symbol)) {
      return true;
    } else if ([gameBoard.firstRow[2], gameBoard.secondRow[1], gameBoard.thirdRow[0]].every(cell => cell === symbol)) {
      return true;
    } else {
      return false;
    };
  };
  return {
    start,
    checkWin,
  };
})();

displayController.create();

const p1 = Player('gozoo', 'X');
const p2 = Player('gwen', 'O');


gameBoard.addSymbol(p1.symbol, 1, 1);

gameBoard.addSymbol(p1.symbol, 2, 1);

gameBoard.addSymbol(p1.symbol, 3, 1);

gameBoard.addSymbol(p2.symbol, 1, 3);

console.log(game.checkWin(p1.symbol));

displayController.update();
