const gameBoard = (() => {
  let firstRow = ["","",""];
  let secondRow = ["","",""];
  let thirdRow = ["","",""];
  const board = [firstRow, secondRow, thirdRow]
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

console.log(gameBoard.board);
gameBoard.addSymbol("x", 1, 1);
console.log(gameBoard.board);
