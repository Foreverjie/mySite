import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar, Icon, Row, Col, Button } from 'antd'
import Editor from './Editor'

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  })
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

export class Article extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={16}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: 380,
                marginRight: 24
              }}
            >
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page)
                  },
                  pageSize: 5
                }}
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText
                        type="star-o"
                        text="156"
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        type="like-o"
                        text="156"
                        key="list-vertical-like-o"
                      />,
                      <IconText
                        type="message"
                        text="2"
                        key="list-vertical-message"
                      />
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                background: '#fff',
                padding: 24
              }}
            >
              <Row type="flex" justify="center" gutter={[16, 16]}>
                <Col>
                  <Button type="primary" size="large">
                    <Link to="/edit">
                      <Icon type="edit" />
                      写文章
                    </Link>
                  </Button>
                </Col>
                <Col>
                  <Button type="primary" disabled size="large">
                    <Icon type="video-camera" />
                    发视频
                  </Button>
                </Col>
                <Col>
                  <Button type="primary" disabled size="large">
                    <Icon type="form" />
                    草稿箱
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

export default Article
