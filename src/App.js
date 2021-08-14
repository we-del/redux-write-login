import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
//import { Button } from 'antd'
//import 'antd/dist/antd.css'
import './App.less'

export default class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Link to='/login' />
        <Link to='/admin' />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/admin' component={Admin} />
          <Redirect to='/login' />
        </Switch>
      </div>
    )
  }
}