import React, { Component } from 'react'
import { Layout } from 'antd'
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
        <div
          style={{
            background: '#fff',
            padding: 24,
            minHeight: 380
          }}
        >
          <Switch>
            <Route path="/article">
              <Article />
            </Route>
            <Route path="/explore">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/" component={Dashboard} />
          </Switch>
        </div>
      </Content>
    )
  }
}

export default MyContent
