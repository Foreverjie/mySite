import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './App.css'

import { Layout, Menu } from 'antd'
import Dashboard from './components/leads/Dashboard'
import Article from './components/articles/Article'
import Login from './components/accounts/Login'
import Register from './components/accounts/Register'
import PrivateRoute from './components/common/PrivateRoute'

import { Provider } from 'react-redux'
import store from './store'

const { Header, Content, Footer } = Layout

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Header
              style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                padding: 0
              }}
            >
              <div className="logo" />
              <Menu
                theme="white"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/article">Article</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/explore">Explore</Link>
                </Menu.Item>
                <Menu.Item key="4" style={{ float: 'right' }}>
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="5" style={{ float: 'right' }}>
                  <Link to="/register">Register</Link>
                </Menu.Item>
              </Menu>
            </Header>
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
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
