import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const { Header } = Layout

export class MyHeader extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {
    const { isAuthenticated, user } = this.props.auth

    const guestLink = (
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
    )

    const userLink = (
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
          <span>{user ? `${user.username}` : ''}</span>
        </Menu.Item>
        <Menu.Item key="5" style={{ float: 'right' }}>
          <Button type="link" size="small" onClick={this.props.logout}>
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    )

    return (
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          padding: 0
        }}
      >
        <div className="logo" />
        {isAuthenticated ? userLink : guestLink}
      </Header>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(MyHeader)
