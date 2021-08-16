
// 组件
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionDemo1, actionDemo2 } from '../../redux/action_creators/login_action'
import axios from 'axios'

// 图片
import logo from './images/BiLanHangXianLogo.png'
//import errorImg from './images/404.png'

//样式
import './css/login.less'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
let { Item } = Form



class Login extends Component {

  componentDidMount() {
    console.log(this)
  }

  // 查证用户名和密码输入是否正确
  verifyForm = (rule, value, str) => {
    if (value == null) return Promise.reject(new Error(str + '不能为空'))
    else if (value.length < 4) return Promise.reject(new Error(str + '长度要大于等于4位'))
    else if (value.length > 12) return Promise.reject(new Error(str + '长度要小于等于12位'))
    else if (!/^\w+$/.test(value)) return Promise.reject(new Error(str + '需由数字，字母或下划线组成'))
    else return Promise.resolve()
  }

  formRef = React.createRef()

  formCommit = async () => {
    try {
      const values = await this.formRef.current.validateFields();
      axios.post('http://localhost:3000/login', values)
        .then(value => console.log(value))
        .catch(error => console.log(error))
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      message.error('输入格式不匹配，请重新输入')
    }
  }


  render() {
    console.log(this)
    // 普通组件用 <He> 路由组件用{Hel} 普通图片和变量用{we}
    return (
      <div className="login-page">
        <header>
          <img src={logo} alt="logo" title="logo" />
          <h1>后台管理系统</h1>
        </header>
        <section>
          <div className="login-box">
            <h1>用户登录</h1>
            <Form
              ref={this.formRef}
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            >
              <Item
                name="username"
                rules={[
                  {
                    // rule和value都为环境变量，rule保存的是该标签的信息，value保存的是数值
                    validator: (rule, value) => this.verifyForm(rule, value, '用户名')
                  }
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon user-icon" />} placeholder="用户名" />
              </Item>
              <Item
                name="password"
                rules={[
                  {
                    validator: (rule, value) => this.verifyForm(rule, value, '密码'),
                  }

                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon lock-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Item>

              <Item>
                <Button onClick={this.formCommit} type="primary" htmlType="submit" className="login-form-button login-click-btn">
                  登录
                </Button>
              </Item>
            </Form>

          </div>
        </section>
      </div >
    )
  }
}

export default connect(
  state => ({ login: state.login }),
  {
    success1: actionDemo1,
    success2: actionDemo2
  }
)(Login)