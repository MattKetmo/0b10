import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import Cell from 'components/Cell'

const styles = {
  table: {
    width: '100%',
    borderSpacing: 5,
    borderCollapse: 'separate',
  }
}

class BoardGame extends Component {
  state = {
    game: []
  }

  componentWillMount() {
    const { size } = this.props

    const game = Array.apply(null, { length: size * size })
    game[9] = 1
    game[18] = 0

    this.setState({ game })
  }

  onCellClick(index) {
    const game = this.state.game.slice(0)

    let value = game[index]
    if (value === 0) {
      value = 1
    } else if (value === 1) {
      value = undefined
    } else {
      value = 0
    }

    game[index] = value

    this.setState({ game })
  }

  render() {
    const { classes, size } = this.props
    const { game } = this.state

    return (
      <table className={classes.table}>
        <tbody>
          {Array.apply(null, { length: size }).map((e, i) => (
            <tr key={i}>
              {Array.apply(null, { length: size }).map((e, j) => (
                <Cell
                  key={j}
                  onClick={i * size + j !== 42 ? () => this.onCellClick(i * size + j) : () => {}}
                  mutable={i * size + j !== 42}
                  value={game[i * size + j]}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default withStyles(styles)(BoardGame)
