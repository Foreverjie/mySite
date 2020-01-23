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

import { Layout } from 'antd'
import Dashboard from './components/leads/Dashboard'
import Article from './components/articles/Article'
import Login from './components/accounts/Login'
import Register from './components/accounts/Register'
import PrivateRoute from './components/common/PrivateRoute'
import { loadUser } from './actions/auth'
import MyHeader from './components/layout/MyHeader'

import { Provider } from 'react-redux'
import store from './store'

const { Content, Footer } = Layout

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <MyHeader />
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
                  {/* <Route path="/" component={Dashboard} /> */}
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
