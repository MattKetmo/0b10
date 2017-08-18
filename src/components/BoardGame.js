import React from 'react'
import { withStyles } from 'material-ui/styles'

import Cell from 'components/Cell'

const styles = {
  table: {
    width: '100%',
    borderSpacing: 5,
    borderCollapse: 'separate',
  }
}

function BoardGame(props) {
  const {
    cells,        // current game
    classes,
    game,         // initial game
    onCellClick,  // for mutable cells only
    size,         // Math.sqrt(cells.length)
  } = props

  return (
    <table className={classes.table}>
      <tbody>
        {Array.apply(null, { length: size }).map((e, i) => (
          <tr key={i}>
            {Array.apply(null, { length: size }).map((e, j) => (
              <Cell
                key={j}
                onClick={game[i * size + j] === undefined ? () => onCellClick(i * size + j) : () => {}}
                mutable={game[i * size + j] === undefined}
                value={cells[i * size + j]}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default withStyles(styles)(BoardGame)
