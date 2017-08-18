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
    borderRadius: 2,
  },
  inner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
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
  fixed: {
    backgroundColor: '#ffd54f',
    color: '#e64a19',
    '&:hover': {
      cursor: 'not-allowed',
    },
  },
}

function Cell(props) {
  const {
    classes,
    fixed,
    onClick,
    value,
  } = props

  return (
    <td
      className={classNames(
        classes.root,
        {
          [classes.mutable]: !fixed,
          [classes.fixed]: fixed,
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
