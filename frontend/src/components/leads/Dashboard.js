import React, { Fragment } from 'react'
import Form from './Form'
import Leads from './Leads'
import Message from './Message'

export default function DashBoard() {
  return (
    <Fragment>
      <Message />
      <Form />
      <Leads />
    </Fragment>
  )
}
