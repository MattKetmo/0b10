import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import BoardGame from 'components/BoardGame'

const styles = {
  root: {
    maxWidth: 500,
    margin: [0, 'auto'],
    padding: [50, 10],
  }
}

class Index extends Component {
  componentWillMount() {
    // Initial game (immutable cells)
    const game = [
      null, null, 1, null, 0, null, null, null, null, null,
      null, null, null, null, 0,  null, null, 1, null, 0,
      0, null, null, 0, null, 0, null, 1, 1, null,
      null, 1, null, null, null, null, null, null, null, null,
      null, null, 1, null, null, null, null, null, 0, null,
      null, 0, null, null, null, null, null, null, null, 0,
      null, null, null, null, null, null, null, null, 0, null,
      null, null, null, 1, null, null, null, null, null, null,
      null, 0, null, null, null, null, null, null, 1, 1,
      null, null, 1, null, null, null, null, null, null, 1,
    ]

    // Current game (mutable cells)
    const cells = game.slice(0)

    this.setState({ game, cells })
  }

  onCellClick(index) {
    const cells = this.state.cells.slice(0)

    let value = cells[index]
    if (value === 0) {
      value = 1
    } else if (value === 1) {
      value = undefined
    } else {
      value = 0
    }

    cells[index] = value

    this.setState({ cells })
  }

  render() {
    const { classes } = this.props
    const { cells, game } = this.state

    return (
      <div className={classes.root}>
        <BoardGame
          cells={cells}
          game={game}
          onCellClick={this.onCellClick.bind(this)}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Index)
