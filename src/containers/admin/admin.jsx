import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionAdmin1 } from '../../redux/action_creators/login_action'

class Admin extends Component {
  componentDidMount() {
    console.log(this)
  }
  render() {
    return (
      <div>我是 Admin of page</div>
    )
  }
}

export default connect(
  state => ({ adminTest: state.login }),
  {
    opearateAdmin: actionAdmin1
  }
)(Admin)