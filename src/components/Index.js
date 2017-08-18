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
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <BoardGame size={8} />
      </div>
    )
  }
}

export default withStyles(styles)(Index)
