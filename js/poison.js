export default class Poison {
    constructor (board) {
        this.initialize(board);
        this.addPoison();
    }

    initialize (board) {
        this.board = board;
        this.$poisonImg = document.createElement('img');
        this.$poisonImg.setAttribute('src', 'http://pm1.narvii.com/6508/2cab51768eafc444e372b827797b2e00cb9d8ab2_hq.jpg');
        this.$poisonImg.setAttribute('height', '60');
        this.$poisonImg.setAttribute('width', '60');
    }

    appendPoison (x, y) {
        document.getElementById(`${x}_${y}`).appendChild(this.$poisonImg.cloneNode(true));
        this.board.board[x][y] = 3;
    }

    removePoison () {
        for (let i = 0; i< this.board.noOfRows; i++) {
            for (let j=0; j< this.board.noOfCols; j++) {
                if (this.board.board[i][j] === 3) {
                    document.getElementById(`${i}_${j}`).firstChild.remove();
                    this.board.board[i][j] = 0;
                }
            }
        }
    }

    addPoison () {
        let x, y;
        for (let i = 0; i< this.board.noOfRows; i++) {
            do {
                x = Math.floor(Math.random() * this.board.noOfRows);
                y = Math.floor(Math.random() * this.board.noOfCols);
            } while (this.board.board[x][y] === 1 || this.board.board[x][y] === 3 ||
            (x-1 !== -1 && this.board.board[x-1][y] === 1) ||
            (x+1 !== this.board.noOfRows && this.board.board[x+1][y] === 1) ||
            (y-1 !== -1 && this.board.board[x][y-1] ===1) ||
            (y+1 !== this.board.noOfCols && this.board.board[x][y+1] ===1));

            this.appendPoison(x, y);
        }
    }
}
