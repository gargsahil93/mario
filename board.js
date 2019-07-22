
const EMPTY_CELL = 0

function getCellName(row, col) {
  return `${row}_${col}`
}

export default class Board {
  constructor(mountNode, cellSize = 60) {
    if (cellSize < 60) {
      cellSize = 60;
    }

    this.mountNode = mountNode
    this.cellSize = cellSize

    this.init()
  }

  init() {
    const boardRect = this.mountNode.getBoundingClientRect()

    this.noOfCols = Math.floor(boardRect.width / this.cellSize)
    this.noOfRows = Math.floor(boardRect.height / this.cellSize)
  }

  create() {
    const grid = this.getGrid()
    this.mountNode.innerHTML = grid

    this.board = Array(this.noOfRows).fill(0)
    Array(this.noOfRows).fill(0).forEach((_, i) => {
      this.board[i] = Array(this.noOfCols).fill(0)
    })
  }

  /**
   * @private
   */
  getGrid() {
    return `
    <table>
      <tbody>
        ${Array(this.noOfRows).fill(0).map((_, i) => {
      return `
            <tr style="height: ${this.cellSize}px">
              ${Array(this.noOfCols).fill(0).map((_, j) => {
        return `<td id="${getCellName(i, j)}" class="cell" style="height: ${this.cellSize}px; width: ${this.cellSize}px"></td>`
      }).join('')}
            </tr>
          `
    }).join('')}
      </tbody>
    </table>
  `
  }

  getBoardWidth() {
    return this.board[0].length - 1
  }

  getBoardHeight() {
    return this.board.length - 1
  }
}
