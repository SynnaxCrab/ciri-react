import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import ArticlesListPage from './ArticlesListPage'
import NewArticlePage from './NewArticlePage'
import ArticlePage from './ArticlePage'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://127.0.0.1:3000/graphql' }),
  dataIdFromObject: o => o.id,
})

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
  }),
  {},
  compose(
    applyMiddleware(client.middleware()),
  ),
)

const App = () => (
  <ApolloProvider store={store} client={client}>
    <Router>
      <div>
        <Route exact path='/' component={ArticlesListPage} />
        <Route path='/articles/new' component={NewArticlePage} />
        <Route path='/articles/:id' component={ArticlePage} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App
