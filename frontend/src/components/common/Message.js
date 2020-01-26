import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { message } from 'antd'

class Message extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired
  }

  componentDidUpdate() {
    if (this.props.message.success) {
      message.success(this.props.message.msg)
    } else {
      for (let key in this.props.message.msg) {
        message.error(`${key}: ` + this.props.message.msg[key])
      }
    }
  }

  render() {
    return <Fragment></Fragment>
  }
}

const mapStateToProps = state => ({
  message: state.message
})

export default connect(mapStateToProps, {})(Message)
