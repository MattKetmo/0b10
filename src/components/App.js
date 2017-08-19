import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { withStyles } from 'material-ui/styles'

import { store } from '../redux';
import Game from 'components/Game'

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
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }
}

export default withStyles(styles)(App)
