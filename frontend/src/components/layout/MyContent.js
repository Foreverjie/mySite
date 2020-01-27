import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Button } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../leads/Dashboard'
import Article from '../articles/Article'
import Login from '../accounts/Login'
import Register from '../accounts/Register'
import PrivateRoute from '../common/PrivateRoute'

const { Content } = Layout

export class MyContent extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px', marginTop: 80 }}>
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
              <Switch>
                <PrivateRoute path="/leads" component={Dashboard} />
                <Route path="/explore">
                  <Dashboard />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <PrivateRoute path="/" component={Article} />
              </Switch>
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
                    <Icon type="edit" />
                    写文章
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
      </Content>
    )
  }
}

export default MyContent
