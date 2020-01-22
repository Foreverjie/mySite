import React, { Component } from 'react'
import { Card } from 'antd'

export class ArticleItem extends Component {
  render() {
    return (
      <div>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="第二篇文章"
          extra={<a href="#">全文</a>}
        >
          这是第二篇文章的摘要
        </Card>
      </div>
    )
  }
}

export default ArticleItem
