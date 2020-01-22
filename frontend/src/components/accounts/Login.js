import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

export class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            Or <Link to="/register">Register now!</Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login
