import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import ArticlesListPage from './ArticlesListPage'

import styles from './App.css'

const client = new ApolloClient({
  // networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj1xk89v8py9q0137afwotu0p' }),
  networkInterface: createNetworkInterface({ uri: 'http://127.0.0.1:3000/graphql' }),
})

const App = () => (
  <Router>
    <div className={styles.app}>
      <ApolloProvider client={client}>
        <Route exact path='/' component={ArticlesListPage} />
      </ApolloProvider>
    </div>
  </Router>
)

export default App
