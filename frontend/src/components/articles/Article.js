import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar, Icon, Row, Col, Button } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getArticles } from '../../actions/articles'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

export class Article extends Component {
  componentDidMount() {
    this.props.getArticles()
  }

  static propTypes = {
    articles: PropTypes.array.isRequired,
    getArticles: PropTypes.func.isRequired
  }

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
                  // onChange: page => {
                  //   console.log(page)
                  // },
                  pageSize: 10
                }}
                dataSource={this.props.articles}
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
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={
                        <Link to={`/articles/${item.id}`}>{item.title}</Link>
                      }
                      // description={Date.parse(item.created_at)}
                      description={
                        <div>
                          <Link to={`/users/${item.owner.id}`}>
                            {item.owner.username}
                          </Link>
                          <span>
                            {'  ' +
                              new Date(
                                Date.parse(item.created_at)
                              ).toLocaleString()}
                          </span>
                        </div>

                        //
                      }
                    />
                    {item.description}
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

const mapStateToProps = state => ({
  articles: state.articles.articles
})

export default connect(mapStateToProps, { getArticles })(Article)
