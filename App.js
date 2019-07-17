import Board from './board';
import Mario from './js/mario';
import Mushroom from './js/mushroom';
import Poison from './js/poison';

require('./style.css')

window.onload = () => {

  const BOARD = document.getElementsByClassName('board')[0];
  const CELL_SIZE = 60;
  
  const board = new Board(BOARD, CELL_SIZE)
  board.create();

  board.board[0][0] = 1;
  const poison = new Poison(board);
  const mushroom = new Mushroom(board);
  const mario = new Mario(board, 0,0, mushroom, poison);
}
