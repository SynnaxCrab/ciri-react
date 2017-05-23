import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const ArticlesListPage = ({ data }) => {
  if (data.loading) {
    return (<div>Loading</div>)
  }

  if (data.error) {
    return (<div>An unexpected error occurred</div>)
  }

  return (
    <div>
      <div>
        there are {data.articles.length} articles.
      </div>
    </div>
  )
}

ArticlesListPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    articles: PropTypes.array,
  }).isRequired,
}

const ArticlesQuery = gql`query ArticlesQuery {
  articles {
    title
  }
}`

const ArticlesListPageWithData = graphql(ArticlesQuery)(ArticlesListPage)

export default ArticlesListPageWithData
