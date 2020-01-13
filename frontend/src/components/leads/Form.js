import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Input, Icon } from 'antd'
import { createLead } from '../../actions/leads'
import PropTypes from 'prop-types'

export class Form extends Component {
  static propTypes = {
    createLead: PropTypes.func.isRequired
  }

  state = {
    loading: false,
    visible: false,
    name: '',
    email: '',
    message: ''
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    this.props.createLead(data)
    this.setState({
      loading: false,
      visible: false,
      name: '',
      email: '',
      message: ''
    })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          New Lead
        </Button>
        <Modal
          title="New Lead"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.state.loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <br />
          <br />
          <Input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter your email"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <br />
          <br />
          <Input.TextArea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Enter your message"
          />
        </Modal>
      </div>
    )
  }
}

export default connect(null, { createLead })(Form)
