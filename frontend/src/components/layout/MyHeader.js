import React, { Component } from 'react'
import { Layout, Menu, Button, Row, Col, Avatar } from 'antd'
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
      <Col span={6}>
        <Button type="primary" style={{ marginRight: '16px' }} size="default">
          <Link to="/login">Login</Link>
        </Button>
        <Button type="default" size="default">
          <Link to="/register">Register</Link>
        </Button>
      </Col>
    )

    const userLink = (
      <Col span={6}>
        <Avatar
          style={{
            backgroundColor: 'lightblue',
            verticalAlign: 'middle',
            marginRight: '16px'
          }}
          size="large"
        >
          {user ? `${user.username}` : ''}
        </Avatar>
        <Button type="danger" size="small" onClick={this.props.logout}>
          Logout
        </Button>
      </Col>
    )

    return (
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          padding: 0,
          backgroundColor: 'white'
        }}
      >
        {/* {isAuthenticated ? userLink : guestLink} */}
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
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
            </Menu>
          </Col>
          <Col span={6}></Col>
          {isAuthenticated ? userLink : guestLink}
        </Row>
      </Header>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(MyHeader)
