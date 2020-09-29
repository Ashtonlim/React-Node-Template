import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'

import { UserOutlined, LockOutlined } from '@ant-design/icons'

import MainLayout from './layouts/MainLayout'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

export default () => {
  const [vals, setVals] = useState({
    username: '',
    password: '',
    usernameReqPF: false,
    pwdReqPF: false,
    errMsg: '',
    redirect: null,
    loginErrMsg: '',
  })

  const [form] = Form.useForm()

  const onLogin = () => {
    console.log('login')
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }

  const handleInput = (e) => {
    let { name, val } = e.target
    setVals({ ...vals, [name]: val })
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  // console.log(this.props);
  if (false) {
    return <Redirect to={this.state.redirect} />
  } else
    return (
      <MainLayout>
        <div>
          <section id="loginP">
            <div className="card">
              <h1>Login</h1>
              <Form
                // {...formItemLayout}
                layout="vertical"
                form={form}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size="large"
                requiredMark={false}
              >
                <Form.Item
                  label="Username"
                  name="Username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input
                    placeholder="Username"
                    value={vals.username}
                    onChange={handleInput}
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    value={vals.password}
                    onChange={handleInput}
                    prefix={<LockOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  buttonItemLayout={null}
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <Button>
                <Link to="/markets">GO TO MARKETS</Link>
              </Button>

              {/* <div>
                <input className="inp-cbx" id="noon" type="checkbox" />
                <label className="cbx" htmlFor="noon">
                  <span>
                    <svg width="12px" height="10px">
                      <use xlinkHref="#check"></use>
                    </svg>
                  </span>
                  <span>Remember me</span>
                </label>
                <svg className="inline-svg">
                  <symbol id="check" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </symbol>
                </svg>
              </div>

              <div className="control mtb20">
                 <p className="help is-danger">{this.props.users.loginErrMsg}</p>
                <p className="help is-danger">{this.state.loginErrMsg}</p> 
                <button onClick={onLogin} className="button is-primary">
                  Login
                </button> */}
              {/* </div> */}
            </div>
          </section>
        </div>
      </MainLayout>
    )
}
