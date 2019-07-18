const ARROW_KEYS = [37, 38, 39, 40];
export default class Mario {
    constructor (board, xstart, ystart, mushroom, poison) {
        this.initialize(board, xstart, ystart, mushroom, poison);
        this.appendMario(xstart, ystart);
        this.board.board[xstart][ystart] = 1;

        this.attachEvents();
    }

    initialize (board, xstart, ystart, mushroom, poison) {
        this.mushroom = mushroom;
        this.poison = poison;
        this.marioSpeed = 1000;
        this.xMario = xstart;
        this.yMario = ystart;
        this.board = board;
        this.$marioImg = document.createElement('img');
        this.$marioImg.setAttribute('src', 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/64/Paper-Mario-icon.png');
    }

    appendMario (x, y) {
        document.getElementById(`${x}_${y}`).appendChild(this.$marioImg);
        this.board.board[x][y] = 1;
        this.xMario = x;
        this.yMario = y;
    }

    removeMario () {
        document.getElementById(`${this.xMario}_${this.yMario}`).firstChild.remove();
        this.board.board[this.xMario][this.yMario] = 0;
    }

    attachEvents () {
        let that = this;
        document.onkeydown = (e) => {
            if (ARROW_KEYS.includes(e.keyCode)) {
                that.move(e.key);
            }
            if (e.keyCode === 32) {
                clearInterval(this.interval);
                this.interval = false;
            }
        }
    }

    move (direction) {
        this.direction = direction;
        if (!this.interval) {
            this.interval = setInterval(() => this.nextStop(), this.marioSpeed);
        }
    }

    increaseSpeed() {
        this.marioSpeed -= 100;
        clearInterval(this.interval);
        this.interval = setInterval(() => this.nextStop(), this.marioSpeed);
    }

    nextStop () {
        let x = this.xMario, y = this.yMario;
        switch(this.direction) {
            case "ArrowRight" :
                y = this.yMario + 1;
                if (y === this.board.noOfCols) {
                    y = this.yMario - 1;
                    this.direction  = "ArrowLeft";
                }
                break;
            case "ArrowLeft" :
                y = this.yMario - 1;
                if (y === -1) {
                    y = this.yMario + 1;
                    this.direction = "ArrowRight";
                }
                break;
            case "ArrowDown" :
                x = this.xMario + 1;
                if (x === this.board.noOfRows) {
                    x = this.xMario - 1;
                    this.direction = "ArrowUp";
                }
                break;
            case "ArrowUp" :
                x = this.xMario - 1;
                if (x === -1) {
                    x = this.xMario + 1;
                    this.direction = "ArrowDown";
                }
                break;
        }
        this.jump(x, y);
    }

    jump (newX, newY) {
        if (this.board.board[newX][newY] === 3) {
            alert ("Game Over");
        }
        if (this.board.board[newX][newY] === 2) {
            this.mushroom.removeMushroom();
            this.poison.removePoison();
            this.poison.addPoison();
            this.mushroom.addMushroom();
            this.increaseSpeed();
        }
        this.removeMario();
        this.appendMario(newX, newY);
        this.xMario = newX;
        this.yMario = newY;
    }
}
