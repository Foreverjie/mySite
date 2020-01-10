import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import { Layout, Menu, Breadcrumb } from 'antd'
import Dashboard from './components/leads/Dashboard'

const { Header, Content, Footer } = Layout

class App extends Component {
  render() {
    return (
      <Layout>
        <Header
          style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}
        >
          <div className="logo" />
          <Menu
            theme="white"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App11</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: '#fff',
              padding: 24,
              minHeight: 380
            }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
