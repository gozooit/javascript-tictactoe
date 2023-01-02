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

// const displayController = (() => {
//   const container = document.createElement('div');
//   container.setAttribute('id', 'board-container');
//   container.setAttribute('class', 'container');

//   container.board.forEach({

//   });
// })();

const theGame = (() => {

})();

const Player = (name, symbol) => {
  return { name, symbol };
};

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
