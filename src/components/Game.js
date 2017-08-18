import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import BoardGame from 'components/BoardGame'
import { isGameComplete, isGameWon } from 'game'

const styles = {
  root: {
    maxWidth: 500,
    margin: [0, 'auto'],
    padding: [50, 10],
  }
}

class Game extends Component {
  componentWillMount() {
    // Initial game (immutable cells)
    const game = [
      // [ null, 1, null, 0 ],
      // [ null, null, 0, null ],
      // [ null, 0, null, null ],
      // [ 1, 1, null, 0 ],
      [ null, null, 1, null, 0, null, null, null, null, null, ],
      [ null, null, null, null, 0,  null, null, 1, null, 0, ],
      [ 0, null, null, 0, null, 0, null, 1, 1, null, ],
      [ null, 1, null, null, null, null, null, null, null, null, ],
      [ null, null, 1, null, null, null, null, null, 0, null, ],
      [ null, 0, null, null, null, null, null, null, null, 0, ],
      [ null, null, null, null, null, null, null, null, 0, null, ],
      [ null, null, null, 1, null, null, null, null, null, null, ],
      [ null, 0, null, null, null, null, null, null, 1, 1, ],
      [ null, null, 1, null, null, null, null, null, null, 1, ],
    ].map((row) => row.map((cell) => ({ value: cell, fixed: cell !== null })))

    this.setState({ game })
  }

  onCellClick(x, y) {
    // Copy current game
    const game = this.state.game.slice(0)

    if (game[x][y].fixed) {
      return
    }

    let value = game[x][y].value

    if (value === 0) {
      value = 1
    } else if (value === 1) {
      value = null
    } else {
      value = 0
    }

    game[x][y].value = value

    console.log("WIN =", isGameComplete(game) && isGameWon(game))

    this.setState({ game })
  }

  render() {
    const { classes } = this.props
    const { game } = this.state

    return (
      <div className={classes.root}>
        <BoardGame game={game} onCellClick={this.onCellClick.bind(this)} />
      </div>
    )
  }
}

export default withStyles(styles)(Game)
