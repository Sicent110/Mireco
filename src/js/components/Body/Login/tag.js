import './LoginandRegister.less';
import $ from 'jquery';
import React from 'react';

import connect from 'react-redux'

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

//import ReactDOM from 'react-dom';

const mapStateToProps = (state) => {
  return {
    // action: state.component.action,//要显示的组件以及  将要分发的action  有"login" "register"
    // modalVisible: state.component.modalVisible,//是否弹出显示组件
    hasLogined: state.component.hasLogined,//是否已经登录 true or false
    userNickName: state.component.userNickName,//当前用户  缺省值为‘’
    userid: state.component.userid,
    // confirmDirty: state.component.confirmDirty //验证注册表单
  }
}

class LoginandRegister extends React.Component{
  constructor(){
    super();
    this.state = {
      modalVisible: false,
      action: 'login',
      // hasLogined: false,
      // userNickName: '',
      // userid: 0,
      confirmDirty: false
    };


  };
// const { hasLogined, userNickName, userid } = this.props;
//设置注册框是否弹出
  setModalVisible(value){
    this.setState({modalVisible: value});
  }

  handleSubmit(e){
    //页面开始向服务器api提交数据
    e.preventDefault();

    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    let regApi = mainHost + APIload.userApi.regIn;
    let logApi = mainHost + APIload.userApi.usualLogin;
    //console.log(regApi);
    //console.log(logApi);
    //下面向服务器传输表单信息代码跨域报错
    if( this.state.action === "login" ) {
      //  $.post({
      //    url: "localhost:3000/login"
      //  })

      fetch(logApi,{
        method: 'POST',
        //mode: "no-cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "user": {
            "number": formData.userNum,
            "password": formData.password
            //access_token: abcdefg
          }
        })
      });
    } else if(this.state.action === "register"){
      fetch(regApi,{
        method: 'POST',
        //mode: "no-cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "index_user": {
            "number": formData.r_userName,
            "password": formData.r_password,
            "phone": formData.phone,
            "email": formData.email,
            "code": formData.captcha
            //access_token: abcdefg
          }
        })
      })
    }
  }
  //用于验证注册表单信息的三个函数方法
  handleConfirmBlur(e){
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword(rule, value, callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('r_password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm(rule, value, callback){
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  //登录注册切换
  changeBack(key) {
    if(key == 1) {
      this.setState({action: 'login'});
    } else if(key == 2) {
      this.setState({action: 'register'});
    }
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
    ?
    <div key="logout" className="register">
      <div className="selfBoard">
        <div className="Boardli">
          <div className="idBox"><span className="idDisplay">田上太郎</span><Button type="ghost" className="logoutBtn">登出</Button></div>
        </div>
        <div className="Boardli">
          <div className="newBtn">创&nbsp;建&nbsp;新&nbsp;作</div>
        </div>
        <div className="Boardli">
          <div className="myGalleryBtn">我&nbsp;的&nbsp;展&nbsp;览&nbsp;馆</div>
        </div>
        <div className="Boardli">
          <Button className="foBtn">我关注的:&nbsp;<span>443</span></Button><Button className="foBtn">关注我的:&nbsp;<span>4396</span></Button>
          <div className="enterLab">进入工作室<Tag color="#fa8072" className="labTag">99+</Tag></div>
        </div>
      </div>
    </div>
    :
    <div key="register" className="register">
      <Button type="primary" className="loginBtn" onClick={()=>this.setModalVisible(true)}><Icon type="login"/>登录/注册</Button>
    </div>;
    return(
      <div>
        {userShow}

        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
        onCancel = {()=>this.setModalVisible(false)}
        onOk = {()=>this.setModalVisible(false)} okText="关闭">
          <Tabs type="card" onChange={this.changeBack.bind(this)}>

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

            <TabPane tab="注册" key="2">
              <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {getFieldDecorator('r_userName', {
                      rules: [{ required: true, message: '请输入您期望的用户名' }]
                    })(
                      <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem label="密码" hasFeedback>
                  {getFieldDecorator('r_password', {
                      rules: [{
                        required: true, message: '请输入您设定的密码'
                      }, {
                        validator: this.checkConfirm.bind(this)
                      }]
                    })(
                      <Input type="password" />
                    )}
                </FormItem>
                <FormItem label="确认密码" hasFeedback>
                  {getFieldDecorator('confirm', {
                      rules: [{
                        required: true, message: 'Please confirm your password!'
                      }, {
                        validator: this.checkPassword.bind(this)
                      }]
                      })(
                      <Input type="password" onBlur={this.handleConfirmBlur.bind(this)}  />
                      )}
                </FormItem>
                <FormItem label="手机号码">
                  {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please input your phone number!' }]
                      })(
                      <Input />
                      )}
                </FormItem>
                <FormItem label="e-mail">
                  {getFieldDecorator('email', {
                      rules: [{ required: false, message: 'Please input your e-mail!' }]
                      })(
                      <Input />
                      )}
                </FormItem>
                <FormItem

                  label="Captcha"
                  extra="We must make sure that your are a human."
                >
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: 'Please input the captcha you got!' }],
                      })(
                        <Input size="large" />
                      )}
                    </Col>
                    <Col span={12}>
                      <Button size="large">Get captcha</Button>
                    </Col>
                  </Row>
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>

      </div>
    )
  }
}

export default const LoginandRegister = Form.create({})(LoginandRegister);

// export default connect(mapStateToProps)(Form.create({})(LoginandRegister));
