import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { func } from 'prop-types'
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
            render={(text, lead) => (
              <span>
                <a>Invite {lead.name}</a>
                <Divider type="vertical" />
                <a onClick={this.props.deleteLead.bind(this, lead.id)}>
                  Delete
                </a>
              </span>
            )}
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
