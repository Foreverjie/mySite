import React, { Fragment } from 'react'
import Form from './Form'
import Leads from './Leads'
import Message from '../common/Message'

export default function DashBoard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  )
}
