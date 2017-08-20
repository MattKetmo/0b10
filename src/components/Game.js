import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Dialog, { DialogActions, DialogTitle } from 'material-ui/Dialog'
import { connect } from 'react-redux'

import BoardGame from 'components/BoardGame'
import Layout from 'components/Layout'

import * as game from '../game'
import { newGame, updateCell } from '../redux';

function nextValue(value) {
  switch (value) {
    case 0:
      return 1;
    case 1:
      return null;
    default:
      return 0;
  }
}

// Main container
class Game extends Component {
  state = {
    dialogOpen: false
  }

  openDialog() {
    this.setState({ dialogOpen: true })
  }

  closeDialog() {
    this.setState({ dialogOpen: false })
  }

  onNewGameClick() {
    this.props.newGame(game.generate())
    this.setState({ dialogOpen: false })
  }

  onCellClick(x, y) {
    const { currentGame } = this.props

    if (currentGame[x][y].fixed) {
      return
    }

    this.props.updateCell(x, y, nextValue(currentGame[x][y].value))

    console.log("WIN =", game.isComplete(currentGame) && game.isWon(currentGame))
    game.isComplete(currentGame) && game.isWon(currentGame) && alert("You win!")
  }

  render() {
    const { currentGame } = this.props

    return (
      <Layout>
        <Button onClick={() => this.openDialog()}>
          New Game
        </Button>

        <BoardGame
          game={currentGame}
          onCellClick={this.onCellClick.bind(this)}
        />

        <Dialog open={this.state.dialogOpen} onRequestClose={() => this.closeDialog()}>
          <DialogTitle>
            {"Start a new game?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => this.closeDialog()}>
              Cancel
            </Button>
            <Button onClick={() => this.onNewGameClick()} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentGame: state.currentGame,
})

const mapDispatchToProps = {
  newGame,
  updateCell,
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
