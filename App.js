import Board from './board';
import Mario from './js/mario';
import Mushroom from './js/mushroom';
import Poison from './js/poison';

require('./style.css');

window.onload = () => {

  const BOARD = document.getElementsByClassName('board')[0];
  const CELL_SIZE = 60;
  
  const board = new Board(BOARD, CELL_SIZE)
  board.create();

  const initX =0, initY =0;

  board.board[initX][initY] = 1;
  const poison = new Poison(board, initX, initY);
  const mushroom = new Mushroom(board);
  const mario = new Mario(board, initX, initY, mushroom, poison);
}
