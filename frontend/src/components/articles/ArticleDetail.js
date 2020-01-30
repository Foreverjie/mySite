import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getArticle } from '../../actions/articles'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

export class ArticleDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getArticle(id)
  }

  render() {
    if (this.props.articleDetail !== null) {
      return (
        <div
          style={{
            background: '#fff',
            padding: 24,
            minHeight: 380
          }}
        >
          <h1 style={{ textAlign: 'center' }}>
            <strong>{this.props.articleDetail.title}</strong>
          </h1>
          <h3 style={{ textAlign: 'center', color: 'gray' }}>
            <Link to={`/users/${this.props.articleDetail.owner.id}`}>
              {this.props.articleDetail.owner.username}
            </Link>
            <span>
              {'  ' +
                new Date(
                  Date.parse(this.props.articleDetail.created_at)
                ).toLocaleString()}
            </span>
          </h3>
          <div
            style={{
              padding: 24
            }}
          >
            <ReactMarkdown
              source={this.props.articleDetail.article}
              renderers={{ code: CodeBlock }}
              escapeHtml={false}
              skipHtml={false}
            />
          </div>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

const mapStateToProps = state => ({
  articleDetail: state.articles.articleDetail
})

export default connect(mapStateToProps, { getArticle })(ArticleDetail)
