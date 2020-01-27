import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import { Input, Row, Col } from 'antd'

const { TextArea } = Input

export class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      text: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
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
                name="text"
                placeholder="Here goes your article..."
                rows={50}
                onChange={this.onChange}
              />
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                background: '#fff',
                padding: 24
              }}
            >
              <ReactMarkdown source={this.state.text} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Editor
