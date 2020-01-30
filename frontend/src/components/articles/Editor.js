import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import { addArticle } from '../../actions/articles'
import PropTypes from 'prop-types'

import { Input, Row, Col, Button, Icon } from 'antd'

const { TextArea } = Input

export class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toArticles: false,
      title: '',
      description: '',
      article: `
# Live demo

Changes are automatically rendered as you type.
      
## Table of Contents
      
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
      
## HTML block below
      
<blockquote>
This blockquote will change based on the HTML settings above.
</blockquote>

\`\`\`js
console.log('asd')
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)`
    }
  }

  static propTypes = {
    addArticle: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    console.log(this.state)
    const { title, description, article } = this.state
    const newArticle = {
      title,
      description,
      article
    }
    this.props.addArticle(newArticle)
    this.setState({ toArticles: true })
  }

  render() {
    if (this.state.toArticles) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Row>
          <Col span={12}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: 380,
                marginRight: 24
              }}
            >
              <Input
                name="title"
                placeholder="Title"
                style={{
                  marginBottom: 16
                }}
                onChange={this.onChange}
              />
              <TextArea
                name="description"
                placeholder="Description"
                rows={2}
                style={{
                  marginBottom: 16
                }}
                onChange={this.onChange}
              />
              <TextArea
                name="article"
                placeholder="Here goes your article..."
                value={this.state.article}
                rows={50}
                onChange={this.onChange}
              />
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                marginBottom: 24
              }}
            >
              <ReactMarkdown
                source={this.state.article}
                renderers={{ code: CodeBlock }}
                escapeHtml={false}
                skipHtml={false}
              />
            </div>
            <div
              style={{
                background: '#fff',
                padding: 24
              }}
            >
              <Row type="flex" justify="center" gutter={[16, 16]}>
                <Col>
                  <Button type="primary" size="large" onClick={this.onSubmit}>
                    <Icon type="upload" />
                    发布
                  </Button>
                </Col>
                <Col>
                  <Button type="primary" disabled size="large">
                    <Icon type="history" />
                    存草稿
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(null, { addArticle })(Editor)
