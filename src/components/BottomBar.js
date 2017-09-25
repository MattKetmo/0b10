import React from 'react'
import UndoIcon from 'material-ui-icons/Undo';
import RedoIcon from 'material-ui-icons/Redo';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  root: {
    margin: [15, 0],
  },
  part1: {
    textAlign: 'left',
  },
  part2: {
    textAlign: 'right',
  },
  button: {
    margin: [0, 10],
  },
  icon: {
    width: 30,
    height: 30,
  },
})

function BottomBar(props) {
  const {
    classes,
    onAddClick,
  } = props

  return (
    <Grid container className={classes.root}>
      <Grid item xs={8} className={classes.part1}>
        <IconButton className={classes.button}>
          <UndoIcon className={classes.icon} />
        </IconButton>
        <IconButton className={classes.button}>
          <RedoIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid item xs={4} className={classes.part2}>
        <IconButton className={classes.button} onClick={onAddClick}>
          <AddIcon className={classes.icon} />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(BottomBar)
