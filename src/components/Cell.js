import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  root: {
    position: 'relative',
    borderRadius: 2,
    userSelect: 'none',
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
    }
  },
  fixed: {
    // backgroundColor: '#ffd54f',
    // color: '#e64a19',
    color: '#424242',
    '&:hover': {
      cursor: 'not-allowed',
    },
  },
  empty: {
    backgroundColor: '#eee',
    '&:hover': {
      backgroundColor: '#ddd',
    }
  },
  zero: {
    backgroundColor: '#FFD54F',
  },
  one: {
    backgroundColor: '#4FC3F7',
  },
})

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
          [classes.empty]: value === null,
          [classes.zero]: value === 0,
          [classes.one]: value === 1,
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
