import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { func } from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads'
import { Table, Divider, Menu, Dropdown, Button, Icon } from 'antd'

function onActioinMenuClick(e) {
  console.log(e)
}

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '信息',
    dataIndex: 'message',
    key: 'message'
  },
  {
    title: 'Action',
    key: 'action',
    render: function(text, lead) {
      console.log(this)
      const actionMenu = (
        <Menu onClick={onActioinMenuClick}>
          <Menu.Item key="0">
            <a href="#">{lead.name}</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="#">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" onClick={onActioinMenuClick}>
            Delete
          </Menu.Item>
        </Menu>
      )
      return (
        <Dropdown overlay={actionMenu} trigger={['click']}>
          <Button>
            Action <Icon type="down" />
          </Button>
        </Dropdown>
      )
    }
  }
]

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getLeads()
  }

  render() {
    return (
      <div>
        <Table
          rowKey={lead => lead.id}
          dataSource={this.props.leads}
          columns={columns}
          onRow={lead => {
            return {
              onClick: event => {
                console.log(event)
              }
            }
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
