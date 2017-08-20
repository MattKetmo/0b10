export function generate() {
  return [
    // [ null, 1, null, 0 ],
    // [ null, null, 0, null ],
    // [ null, 0, null, null ],
    // [ 1, 1, null, 0 ],
    // [ null, null, 1, null, 0, null, null, null, null, null, ],
    // [ null, null, null, null, 0,  null, null, 1, null, 0, ],
    // [ 0, null, null, 0, null, 0, null, 1, 1, null, ],
    // [ null, 1, null, null, null, null, null, null, null, null, ],
    // [ null, null, 1, null, null, null, null, null, 0, null, ],
    // [ null, 0, null, null, null, null, null, null, null, 0, ],
    // [ null, null, null, null, null, null, null, null, 0, null, ],
    // [ null, null, null, 1, null, null, null, null, null, null, ],
    // [ null, 0, null, null, null, null, null, null, 1, 1, ],
    // [ null, null, 1, null, null, null, null, null, null, 1, ],
    // ---
    [0, null, null, 1, null, 0, null, null, 0, null, null, null],
    [null, null, null, null, 0, null, 0, null, null, null, null, 1],
    [null, 1, null, 1, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, 0, null, null, 0, null, null, null],
    [0, null, null, 0, 1, null, null, 1, null, 1, 1, null],
    [0, null, 1, null, null, null, null, 1, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, 1],
    [null, null, 0, null, null, 0, 1, null, null, 0, null, null],
    [null, 1, null, null, null, 0, null, null, 1, null, 1, null],
    [null, null, null, null, null, null, null, null, null, null, 1, null],
    [0, null, 0, null, 1, null, 0, null, 0, null, null, null],
    [null, null, null, null, null, null, null, 1, null, null, null, 0],
  ].map((row) => row.map((cell) => ({ value: cell, fixed: cell !== null })))
}

export function isComplete(game) {
  return game
    .map(row => row.filter(cell => cell.value === null).length)
    .filter(nullCount => nullCount > 0)
    .length === 0
}

function hasSameRepartition(cells) {
  return cells.filter(x => x === 0).length === cells.filter(x => x === 1).length
}

function has2MaxIdenticalCells(cells) {
  const str = cellsToString(cells)

  return str.indexOf('000') === -1 && str.indexOf('111') === -1
}

function cellsToString(cells) {
  return cells.reduce((acc, cur) => acc + (cur !== null ? cur : '-'), '')
}

function isListUnique(cellsList) {
  const hashes = cellsList.map(cells => cellsToString(cells))
  const uniqueHashes = hashes.filter((row, pos) => hashes.indexOf(row) === pos)

  return hashes.length === uniqueHashes.length
}

function extractRows(game) {
  return game.map(rows => rows.map(cell => cell.value))
}

function extractColumns(game) {
  return Object.keys(game[0]).map(i => game.map(row => row[i].value))
}

export function isWon(game) {
  const rows = extractRows(game)
  const cols = extractColumns(game)

  // Rule 1. Each row and each column should contain an equal number of 0s and 1s.
  for (let row of rows) {
    if (!hasSameRepartition(row)) {
      return false
    }
  }
  for (let col of cols) {
    if (!hasSameRepartition(col)) {
      return false
    }
  }

  // Rule 2. More than two of the same number can't be adjacent.
  for (let row of rows) {
    if (!has2MaxIdenticalCells(row)) {
      return false
    }
  }
  for (let col of cols) {
    if (!has2MaxIdenticalCells(col)) {
      return false
    }
  }

  // Rule 3. Each row and column is unique.
  if (!isListUnique(rows)) {
    return false
  }
  if (!isListUnique(cols)) {
    return false
  }

  return true
}
