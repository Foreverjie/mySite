import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads'
import { Table, Divider, Menu, Dropdown, Button, Icon } from 'antd'

const { Column, ColumnGroup } = Table

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
        <Table dataSource={this.props.leads} rowKey={lead => lead.id}>
          <Column title="姓名" dataIndex="name" key="name" />
          <Column title="邮箱" dataIndex="email" key="email" />
          <Column title="信息" dataIndex="message" key="message" />
          <Column
            title="Action"
            key="action"
            render={(text, lead) => {
              const menu = (
                <Menu>
                  <Menu.Item key="1">
                    <a>Invite {lead.name}</a>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="2">
                    <a onClick={this.props.deleteLead.bind(this, lead.id)}>
                      Delete
                    </a>
                  </Menu.Item>
                </Menu>
              )
              return (
                <Dropdown overlay={menu} trigger={['click']}>
                  <Button>
                    Action <Icon type="down" />
                  </Button>
                </Dropdown>
              )
            }}
          />
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
