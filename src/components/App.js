import 'babel-polyfill'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import ArticlesListPage from './ArticlesListPage'
import NewArticlePage from './NewArticlePage'
import ArticlePage from './ArticlePage'

const history = createHistory()

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: process.env.API_END_POINT }),
  dataIdFromObject: o => o.id,
})

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    router: routerReducer,
    apollo: apolloClient.reducer(),
  }),
  {},
  compose(
    applyMiddleware(apolloClient.middleware(), routerMiddleware()),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
)
/* eslint-disable no-underscore-dangle */

const App = () => (
  <ApolloProvider store={store} client={apolloClient}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={ArticlesListPage} />
        <Switch>
          <Route path='/articles/new' component={NewArticlePage} />
          <Route path='/articles/:id' component={ArticlePage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </ApolloProvider>
)

export default App
