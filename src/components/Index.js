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
  state = {
    game: []
  }

  componentWillMount() {
    const { size } = 8

    // Initial game (immutable cells)
    const game = Array.apply(null, { length: size * size })
    game[9] = 1
    game[18] = 0

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
          size={8}
          cells={cells}
          game={game}
          onCellClick={this.onCellClick.bind(this)}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Index)
