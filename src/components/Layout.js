import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    maxWidth: 500,
    margin: [0, 'auto'],
    padding: [10, 10],
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    flexShrink: 1,
    justifyContent: 'center',
    overflowX: 'hidden',
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
