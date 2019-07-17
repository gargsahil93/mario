const INVALID_BOARD_CELL = [1, 3];
export default class Mushroom {
    constructor (board) {
        this.initialize(board);
        this.addMushroom();
    }

    initialize (board) {
        this.board = board;
        this.$mushroomImg = document.createElement('img');
        this.$mushroomImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Novosel_mushroom.svg/64px-Novosel_mushroom.svg.png');
    }

    appendMushroom (x, y) {
        document.getElementById(`${x}_${y}`).appendChild(this.$mushroomImg);
        this.board.board[x][y] = 2;
        this.xMushroom = x;
        this.yMushroom = y;
    }

    removeMushroom () {
        document.getElementById(`${this.xMushroom}_${this.yMushroom}`).firstChild.remove();
        this.board.board[this.xMushroom][this.yMushroom] = 0;
    }

    addMushroom () {
        let x, y;
        do {
            x = Math.floor(Math.random() * this.board.noOfRows);
            y = Math.floor(Math.random() * this.board.noOfCols);
        } while (INVALID_BOARD_CELL.includes(this.board.board[x][y]));
        this.appendMushroom(x, y);
    }
}
