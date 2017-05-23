import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class NewArticlePage extends React.Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  constructor(props) {
    super(props)
    this.state = { title: '', body: '' }
  }

  canSave = () => this.state.title && this.state.body

  handleSave = async () => {
    const { title, body } = this.state
    await this.props.mutate({ variables: { title, body } })
    this.props.history.replace('/')
  }

  handleCancel = () => {
    this.props.history.replace('/')
  }

  render() {
    return (
      <div>
        <input
          value={this.state.title}
          placeholder='title'
          onChange={e => this.setState({ title: e.target.value })}
        />
        <input
          value={this.state.body}
          placeholder='body'
          onChange={e => this.setState({ body: e.target.value })}
        />
        <div>
          <button onClick={this.handleCancel}>Cancel</button>
          {this.canSave()
            ? <button save onClick={this.handleSave}>Save</button>
            : <button disabled>Save</button>
          }
        </div>
      </div>
    )
  }
}

const createArticleMutation = gql`
  mutation createArticle($title: String!, $body: String!) {
    createArticle(title: $title, body: $body) {
      id
    }
  }
`

const NewArticlePageWithMutation = graphql(createArticleMutation)(withRouter(NewArticlePage))

export default NewArticlePageWithMutation
