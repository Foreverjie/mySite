import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
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
    const { username, email, password, password2 } = this.state
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            onChange={this.handleChange}
            value={password2}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
          Or <Link to="/login">Login now!</Link>
        </Form.Item>
      </Form>
    )
  }
}

export default Register
