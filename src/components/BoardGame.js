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
    classes,
    game,
    onCellClick,
  } = props

  return (
    <table className={classes.table}>
      <tbody>
        {game.map((row, x) => (
          <tr key={x}>
            {row.map((cell, y) => (
              <Cell
                key={y}
                onClick={!game[x][y].fixed ? () => onCellClick(x, y) : () => {}}
                fixed={game[x][y].fixed}
                value={game[x][y].value}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default withStyles(styles)(BoardGame)
