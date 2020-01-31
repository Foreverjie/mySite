import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Button } from 'antd'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../leads/Dashboard'
import Article from '../articles/Article'
import ArticleDetail from '../articles/ArticleDetail'
import Login from '../accounts/Login'
import Register from '../accounts/Register'
import Editor from '../articles/Editor'
import PrivateRoute from '../common/PrivateRoute'

const { Content } = Layout

export class MyContent extends Component {
  render() {
    return (
      <Content style={{ padding: '0 360px', marginTop: 80 }}>
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
          <Route path="/edit">
            <Editor />
          </Route>
          <Route path="/articles/:id" component={ArticleDetail} />
          <PrivateRoute path="/" component={Article} />
        </Switch>
      </Content>
    )
  }
}

export default MyContent
