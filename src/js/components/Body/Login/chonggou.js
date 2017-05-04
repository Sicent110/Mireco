import './LoginandRegister.less';
import $ from 'jquery';
// import React from 'react';
import React, { Component, PropTypes } from 'react'
//import { Link } from 'react-router';
//import 'whatwg-fetch';
//var APIhost = require('./src/apipackage/API.json');
//动态获取api接口地址
import APIload from '../../../apipackage/API.json';
let mainHost = APIload.mainApi;
//console.log(mainHost);
import {
  Row,
  Col,
  Menu,
  Icon,
  Form,
  Input,
  Button,
  Checkbox,
  Modal,
  Tabs,
  Tag
  } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;



export default class Login extends Component {
  static propTypes = {
    // modalVisible: PropTypes.bool.isRequired,
    hasLogined: PropTypes.bool.isRequired,
    userNickName: PropTypes.string.isRequired,
    // userid: 0,
    confirmDirty: PropTypes.bool.isRequired

    // value: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired
  }



  render() {

    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined

    // const { hasLogined, userNickName, userid } = this.props;

    return (

      <TabPane tab="登录" key="1">
        <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
          <FormItem label="账户">
            {getFieldDecorator('userNum', {
                rules: [{ required: true, message: '请输入您的账号' }]
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}/>
              )}
          </FormItem>
          <FormItem label="密码">
            {getFieldDecorator('pass', {
                rules: [{
                  required: true, message: '请输入您设定的密码'
                }]
              })(
                <Input type="password" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
      </TabPane>
      //
      // <div>
      //   <p>Type a username or repo full name and hit 'Go':</p>
      //   <input size="45"
      //          ref="input"
      //          defaultValue={this.props.value}
      //          onKeyUp={this.handleKeyUp} />
      //   <button onClick={this.handleGoClick}>
      //     Go!
      //   </button>
      //   <p>
      //     Code on <a href={GITHUB_REPO} target="_blank">Github</a>.
      //   </p>
      //   <p>
      //     Move the DevTools with Ctrl+W or hide them with Ctrl+H.
      //   </p>
      // </div>
    )
  }
}
