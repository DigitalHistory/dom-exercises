function drawSquare (id, content) {
  return `<div id=${id}>${content}</div>`
}

function drawRow (columns = 8, rowNum=1) {
  let accumulator = '';
  for (let colNum =0; colNum< columns; colNum++) {
    let id = rowNum.toString() + (colNum + 1).toString();
    accumulator += drawSquare(id, id);
  }
  accumulator =  `<section class="row">${accumulator}</section>`
  return accumulator;
}


function drawBoard (rows=8) {
  let accumulator= ``;
  for (let row = 0; row< rows; row++) {
    accumulator += drawRow(rows, row + 1)
  }
  let board = document.querySelector('main#board')
  board.innerHTML = `${accumulator}`
}


window.onload = function (event) {
  drawBoard(9)
};
