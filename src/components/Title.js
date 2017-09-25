import React from 'react'
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  root: {
    margin: [15, 0],
    textAlign: 'center',
  },
})

function Title(props) {
  const {
    children,
    classes,
  } = props

  return (
    <Typography className={classes.root} type="headline">
      {children}
    </Typography>
  )
}

export default withStyles(styles)(Title)
