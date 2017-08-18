import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    position: 'relative',
    backgroundColor: '#eee',
    /*border: '1px solid black',*/
    '&:after': {
      content: '""',
      display: 'block',
      marginTop: '100%',
    },
  },
  inner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // background: 'gold',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mutable: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ddd',
    }
  },
  immutable: {
    backgroundColor: 'gold',
  },
}

function Cell(props) {
  const {
    classes,
    mutable,
    onClick,
    value,
  } = props

  return (
    <td
      className={classNames(
        classes.root,
        {
          [classes.mutable]: mutable,
          [classes.immutable]: !mutable,
        }
      )}
      onClick={onClick}
    >
      <div className={classes.inner}>
        {value}
      </div>
    </td>
  )
}

export default withStyles(styles)(Cell)
