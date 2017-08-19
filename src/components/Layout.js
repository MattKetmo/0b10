import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    maxWidth: 500,
    margin: [0, 'auto'],
    padding: [50, 10],
  }
}

function Layout(props) {
  const { classes, children } = props

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default withStyles(styles)(Layout)
