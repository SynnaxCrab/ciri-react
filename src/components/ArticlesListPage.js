import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ArticlePreview from './ArticleListPage/ArticlePreview'

const ArticlesListPage = ({ data }) => {
  if (data.loading) {
    return (<div>Loading</div>)
  }

  if (data.error) {
    return (<div>An unexpected error occurred</div>)
  }

  return (
    <div>
      <Link to='/articles/new'>New Article</Link>
      <div>
        there are {data.articles.length} articles.
      </div>
      {data.articles.map(article =>
        <ArticlePreview key={article.id} article={article} />)
      }
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
    id
  }
}`

const ArticlesListPageWithData = graphql(ArticlesQuery)(ArticlesListPage)

export default ArticlesListPageWithData
