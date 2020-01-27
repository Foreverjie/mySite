import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import { Layout } from 'antd'
import { loadUser } from './actions/auth'
import MyHeader from './components/layout/MyHeader'
import Message from './components/common/Message'
import MyContent from './components/layout/MyContent'
import MyFooter from './components/layout/MyFooter'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props)
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Message />
            <MyHeader />
            <MyContent />
            <MyFooter />
          </Layout>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
