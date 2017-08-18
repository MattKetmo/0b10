import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import Index from 'components/Index'

const styles = (theme) => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    a: {
      textDecoration: 'none',
    },
  },
})

class App extends Component {
  render() {
    return (
      <Index />
    )
  }
}

export default withStyles(styles)(App)
