
const EMPTY_CELL = 0

function getCellName(row, col) {
  return `${row}_${col}`
}


/**
 * Scaffolds a board at the given mountNode (DOM reference).
 * 
 * Table with a ID - row_col will be created like below
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * | 0_0 | 0_1 | 0_2 | ... |     |     |     |     |
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * | 1_0 | 1_1 | 1_2 | ... |     |     |     |     |
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * | 2_0 | 2_1 | 2_2 | ... |     |     |     |     |
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * | ... |     |     | ... |     |     |     |     |
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * |     |     |     | ... |     |     |     |     |
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * |     |     |     | ... |     |     |     |     |
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * |     |     |     | ... |     |     |     |     |
 * |-----|-----|-----|-----|-----|-----|-----|-----|
 * 
 * @param {DOM} mountNode
 * @param {number} cellSize
 */
export default class Board {
  constructor(mountNode, cellSize = 60) {
    // Please don't configure it to anything < 60
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

  /**
   * Will create the table
   */
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