import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import BoardGame from 'components/BoardGame'
import { isGameComplete, isGameWon } from 'game'

import { updateCell } from '../redux';

const styles = {
  root: {
    maxWidth: 500,
    margin: [0, 'auto'],
    padding: [50, 10],
  }
}

class Game extends Component {
  onCellClick(x, y) {
    const { game } = this.props

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

    this.props.updateCell(x, y, value)

    console.log("WIN =", isGameComplete(game) && isGameWon(game))
  }

  render() {
    const { classes, game } = this.props
    console.log(game)

    return (
      <div className={classes.root}>
        <BoardGame game={game} onCellClick={this.onCellClick.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  game: state.game,
})

const mapDispatchToProps = {
  updateCell,
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Game))

export default GameContainer
