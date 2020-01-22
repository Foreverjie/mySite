import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import { Input } from 'antd'

const { TextArea } = Input

export class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  onTextChange = e => {
    let text = e.target.value
    this.setState({ text })
  }

  render() {
    return (
      <div>
        <TextArea rows={4} onChange={this.onTextChange} />
        <ReactMarkdown source={this.state.text} />
      </div>
    )
  }
}

export default Editor
