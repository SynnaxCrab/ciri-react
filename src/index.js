import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader'

import App from './components/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Route exact path='/' component={Component} />
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
