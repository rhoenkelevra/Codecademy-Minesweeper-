// Generate Player Board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
   const board = [];
   for (let rowIndex = 0; rowIndex < numberOfRows ; rowIndex++ ){
    const row = []; 
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
    row.push(' ');
   }; // second for ending
   board.push(row);
}; // first for ending
return board;
}; // function ending

//Generate Bomb Board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows ; rowIndex++ ){
   const row = []; 
   for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
   row.push(null);
  } // second for ending
  board.push(row);
} // first for ending

  let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs){
      // bombs can be placed on same spot, fix it after learning control flow
      const randomRowIndex = Math.floor(Math.random() * numberOfRows);

      const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

      board[randomRowIndex][randomColumnIndex] = 'B';

      numberOfBombsPlaced++;
    };// while ending

return board;
}; // function ending

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};


let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);