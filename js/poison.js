const BUFFER =2;
export default class Poison {
    constructor (board, initX, initY) {
        this.poisonCells = [];
        this.initialize(board);
        this.addPoison(initX, initY);
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
        this.poisonCells.push({x:x, y:y});
    }

    removePoison () {
        this.poisonCells.forEach((val)=>{
            document.getElementById(`${val.x}_${val.y}`).firstChild.remove();
            this.board.board[val.x][val.y] = 0;
        });
        this.poisonCells = [];
    }

    addPoison (xMario, yMario) {
        let x, y;
        for (let i = 0; i< this.board.noOfRows; i++) {
            do {
                x = Math.floor(Math.random() * this.board.noOfRows);
                y = Math.floor(Math.random() * this.board.noOfCols);
            } while (this.board.board[x][y] === 3 ||
            (x === xMario && y >= yMario - BUFFER && y <= yMario + BUFFER) ||
            (y === yMario && x >= xMario - BUFFER && x <= xMario + BUFFER));

            this.appendPoison(x, y);
        }
    }
}
