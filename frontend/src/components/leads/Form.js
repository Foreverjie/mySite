import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Input, Icon } from 'antd'
import { createLead } from '../../actions/leads'

export class Form extends Component {
    state = {
        loading: false,
        visible: false,
        name: '',
        email: '',
        message: '',
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        }
        this.props.createLead(data)
        setTimeout(() => {
            this.setState({ loading: false, visible: false, name: '', email: '', message: '' });
        }, 3000);
    }
    
    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleNameChange = () => {
        this.setState({name: event.target.value})
    }

    handleEmailChange = () => {
        this.setState({email: event.target.value})
    }

    handleMessageChange = () => {
        this.setState({message: event.target.value})
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
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                          Submit
                        </Button>,
                      ]}
                    >
                    <Input
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder="Enter your name"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <br />
                    <br />
                    <Input
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        placeholder="Enter your email"
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <br />
                    <br />
                    <Input.TextArea
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                        placeholder="Enter your message"
                    />
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, { createLead })(Form)
