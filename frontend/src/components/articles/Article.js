import React, { Component } from 'react'
import Editor from './Editor'
import ArticleItem from './ArticleItem'
import { Card } from 'antd'

export class Article extends Component {
  render() {
    return (
      <div>
        {/* <Editor /> */}
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    )
  }
}

export default Article
