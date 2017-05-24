import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import ArticlesListPage from './ArticlesListPage'
import NewArticlePage from './NewArticlePage'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://127.0.0.1:3000/graphql' }),
  dataIdFromObject: o => o.id,
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path='/' component={ArticlesListPage} />
        <Route path='/articles/new' component={NewArticlePage} />
      </div>
    </Router>
  </ApolloProvider>

)

export default App
