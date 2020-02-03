import React, { Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

export class MyFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        <div className="copyright">
          <a href="http://www.beian.miit.gov.cn" target="_blank">
            粤ICP备18087217
          </a>
        </div>
      </Footer>
    )
  }
}

export default MyFooter
