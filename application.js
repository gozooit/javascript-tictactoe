const gameBoard = (() => {
  let firstRow = ["","",""];
  let secondRow = ["","",""];
  let thirdRow = ["","",""];
  const board = [firstRow, secondRow, thirdRow];
  const addSymbol = (symbol, positionNumber, rowNumber) => {
    position = convertPosition(positionNumber);
    row = convertRow(rowNumber);
    !row[position] ? row[position] = symbol : console.log('error');
    displayController.updateBoard();
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
  const createBoard = () => {
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
  const updateBoard = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      cell.innerText = gameBoard.board[row][col];
    });
  };
  const setPlayers = () => {
    const menu = document.getElementById('menu');

    const br = document.createElement('br');

    const form = document.createElement('form');

    const labelPlayer1 = document.createElement('label');
    labelPlayer1.setAttribute('for', 'player-1');
    labelPlayer1.innerText = 'Player 1';

    const textPlayer1 = document.createElement('input');
    textPlayer1.setAttribute('type', 'text');
    textPlayer1.setAttribute('id', 'player-1');

    const labelSymbolXPlayer1 = document.createElement('label');
    labelSymbolXPlayer1.setAttribute('for', 'symbol-x-player-1');
    labelSymbolXPlayer1.innerText = 'X';

    const radioSymbolXPlayer1 = document.createElement('input');
    radioSymbolXPlayer1.setAttribute('type', 'radio');
    radioSymbolXPlayer1.setAttribute('name', 'symbol-player-1');
    radioSymbolXPlayer1.setAttribute('id', 'symbol-x-player-1');
    radioSymbolXPlayer1.setAttribute('value', 'X');

    const labelSymbolOPlayer1 = document.createElement('label');
    labelSymbolOPlayer1.setAttribute('for', 'symbol-o-player-1');
    labelSymbolOPlayer1.innerText = '0';

    const radioSymbolOPlayer1 = document.createElement('input');
    radioSymbolOPlayer1.setAttribute('type', 'radio');
    radioSymbolOPlayer1.setAttribute('name', 'symbol-player-1');
    radioSymbolOPlayer1.setAttribute('id', 'symbol-o-player-1');
    radioSymbolOPlayer1.setAttribute('value', 'O');

    const labelPlayer2 = document.createElement('label');
    labelPlayer2.setAttribute('for', 'player-2');
    labelPlayer2.innerText = 'Player 2';

    const textPlayer2 = document.createElement('input');
    textPlayer2.setAttribute('type', 'text');
    textPlayer2.setAttribute('id', 'player-2');

    const labelSymbolXPlayer2 = document.createElement('label');
    labelSymbolXPlayer2.setAttribute('for', 'symbol-x-player-2');
    labelSymbolXPlayer2.innerText = 'X';

    const radioSymbolXPlayer2 = document.createElement('input');
    radioSymbolXPlayer2.setAttribute('type', 'radio');
    radioSymbolXPlayer2.setAttribute('name', 'symbol-player-2');
    radioSymbolXPlayer2.setAttribute('id', 'symbol-x-player-2');
    radioSymbolXPlayer2.setAttribute('value', 'X');

    const labelSymbolOPlayer2 = document.createElement('label');
    labelSymbolOPlayer2.setAttribute('for', 'symbol-o-player-2');
    labelSymbolOPlayer2.innerText = '0';

    const radioSymbolOPlayer2 = document.createElement('input');
    radioSymbolOPlayer2.setAttribute('type', 'radio');
    radioSymbolOPlayer2.setAttribute('name', 'symbol-player-2');
    radioSymbolOPlayer2.setAttribute('id', 'symbol-o-player-2');
    radioSymbolOPlayer2.setAttribute('value', 'O');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'submit');
    submit.setAttribute('name', 'submit');
    submit.setAttribute('value', 'Create players');

    form.appendChild(labelPlayer1);
    form.appendChild(textPlayer1);
    form.appendChild(br.cloneNode());

    form.appendChild(radioSymbolXPlayer1);
    form.appendChild(labelSymbolXPlayer1);
    form.appendChild(br.cloneNode());

    form.appendChild(radioSymbolOPlayer1);
    form.appendChild(labelSymbolOPlayer1);
    form.appendChild(br.cloneNode());

    form.appendChild(labelPlayer2);
    form.appendChild(textPlayer2);
    form.appendChild(br.cloneNode());

    form.appendChild(radioSymbolXPlayer2);
    form.appendChild(labelSymbolXPlayer2);
    form.appendChild(br.cloneNode());


    form.appendChild(radioSymbolOPlayer2);
    form.appendChild(labelSymbolOPlayer2);
    form.appendChild(br.cloneNode());

    form.appendChild(submit);
    menu.appendChild(form);

    form.addEventListener('submit', () => {
    // prevent the default behavior which sends to the server
    event.preventDefault();

    const player1Symbol = document.querySelector('input[name="symbol-player-1"]:checked').value;
    const player1 = Player(form.elements.textPlayer1.value, player1Symbol.value);
    const player2Symbol = document.querySelector('input[name="symbol-player-2"]:checked').value;
    const player2 = Player(form.elements.textPlayer2.value, player2Symbol.value);

    return [player1, player2];
  })
  }
  return {
    createBoard,
    updateBoard,
    setPlayers,
  };
})();

const Player = (name, symbol) => {
  return { name, symbol };
};

const game = (() => {
  const play = (player1, player2) => {

  };
  const initialize = () => {

  };
  const checkForTie = () => {
    return gameBoard.board.every(row => row.every(cell => cell !== ''));
  }
  const checkForWin = (symbol) => {
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
    play,
    checkForWin,
  };
})();

// displayController.createBoard();

// const p1 = Player('gozoo', 'X');
// const p2 = Player('gwen', 'O');


// gameBoard.addSymbol(p1.symbol, 1, 1);

// gameBoard.addSymbol(p1.symbol, 2, 1);

// gameBoard.addSymbol(p1.symbol, 3, 1);

// gameBoard.addSymbol(p2.symbol, 1, 3);

// console.log(game.checkForWin(p1.symbol));

// displayController.updateBoard();

displayController.setPlayers();
