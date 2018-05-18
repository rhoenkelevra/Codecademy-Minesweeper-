const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
   let board = [];
   for (let boardRow = 0; boardRow < numberOfRows ; boardRow++ ){
    let row = []; 
    for (let boardColumn = 0; boardColumn < numberOfColumns; boardColumn++){
    row.push(' ');
   }; // second for ending
   board.push(row);
}; // first for ending
console.log(board);
}; // function ending

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let boardRow = 0; boardRow < numberOfRows ; boardRow++ ){
   let row = []; 
   for (let boardColumn = 0; boardColumn < numberOfColumns; boardColumn++){
   row.push(null);
  }; // second for ending
  board.push(row);
}; // first for ending
  let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs){
      // bombs can be placed on same spot, fix it after learning control flow
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);

      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

      board = [randomRowIndex][randomColumnIndex] = 'B';
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