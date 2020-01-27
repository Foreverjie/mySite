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
      </Content>
    )
  }
}

export default MyContent
