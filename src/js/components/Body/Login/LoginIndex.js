var React = require('react');

import addClassName from 'classnames'
import $ from 'jquery';
import 'whatwg-fetch'

import './LoginIndex.less'

export default class LoginIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: true,
      label: 'addClassNameTest',
      signUp: true,
      email: '',
      emailError: '',
      lemail: '',
      lemailError: '',
      password: '',
      spassError: '',
      repassword: '',
      srepassError: '',
      lpassword: '',
      lpassError: '',
      loginError: '',
      signupError: '',
    };
  }
  componentDidMount() {
    $('#tab1')[0].checked = true;

  }

  // 切换注册登录界面
  handleTab(e) {
    if (e.target.id === 'tab1') {
      this.setState({
        signUp: true
      });
    } else {
      this.setState({
        signUp: false
      });
    }

  }

  // 验证用户注册或登录邮箱
  handleEmail(e) {
    let value = e.target.value;
    let error = '';
    if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
      error = '请输入正确的Email';
    }
    if (value.length === 0) {
      error = '';
    }
    this.setState({
      email: value,
      emailError: error
    });
  }

  // 验证用户注册输入密码的合法程度
  handleSpass(e) {
    let value = e.target.value;
    let error = '';
    //如果第一次输入的密码和第二次输入密码不一致
    if (!/^[0-9A-Za-z]{6,}$/.test(value)) {
      error = '密码需要由6位以上数字和密码组成';
    }
    if (value.length === 0) {
      error = '';
    }
    this.setState({
      password: value,
      spassError: error
    });

  }

  handleSrepass(e) {
    let value = e.target.value;
    let error = '';
    //如果第一次输入的密码和第二次输入密码不一致
    if (!value === this.state.password) {
      error = '密码需要由6位以上数字和密码组成';
    }
    if (value.length === 0) {
      error = '';
    }
    this.setState({
      repassword: value,
      srepassError: error
    });
  }

  // 验证用户注册或登录邮箱
  handlelEmail(e) {
    let value = e.target.value;
    let error = '';
    if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
      error = '请输入正确的Email';
    }
    if (value.length === 0) {
      error = '';
    }
    this.setState({
      lemail: value,
      lemailError: error
    });
  }

  // 验证用户登录输入密码的合法程度
  handleLpass(e) {
    let value = e.target.value;
    let error = '';
    // 举例: 密码需要由6位以上数字和密码组成
    if (!/^[0-9A-Za-z]{6,}$/.test(value)) {
      error = '密码需要由6位以上数字和密码组成';
    }
    if (value.length === 0) {
      error = '';
    }
    this.setState({
      lpassword: value,
      lpassError: error
    });
  }

  // 向服务器传送注册用户信息
  sendSignupInfo() {
    if (this.state.password.length === 0 && this.state.repassword.length === 0) {
      // alert('1')
    } else if (this.state.emailError.length === 0 || this.state.spassError.length === 0 || this.state.srepassError.length === 0) {

      // $.ajax({
      //   url: "",
      //   async: false
      // });
    }

  }

  // 向服务器传送登录用户信息
  sendLoginInfo() {
    let error = '';
    if (this.state.lemail.length === 0 && this.state.lpassword.length === 0) {
      error = '用户名和密码不为空'
      this.setState({
        signupError: error
      });
      return;
    } else if (this.state.lemailError.length === 0 || this.state.lpassError.length === 0) {
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          number: this.state.email,
          password: this.state.password,
          access_token: '?',
        })
      })
    }
  }

  render() {

    // 若注册状态为真 显示注册界面
    let signupBox = addClassName({
      'signBox': true,
      'hideBox': !this.state.signUp,
    })

    // 若注册状态为假 显示登录界面
    let loginBox = addClassName({
      'loginBox': true,
      'hideBox': this.state.signUp,
    })

    return (
      <div>
        <label htmlFor='tab1'>Signup</label>
        <input type='radio' name='tab' id='tab1' onChange={this.handleTab.bind(this)} />
        <label htmlFor='tab2'>Login</label>
        <input type='radio' name='tab' id='tab2' onChange={this.handleTab.bind(this)} />
        <div className={signupBox}>
          <p>
            <label htmlFor='signupemail'>email:</label>
            <input type='text' id='signupemail' value={this.state.email} onChange={this.handleEmail.bind(this)} />
            <span>{this.state.emailError}</span>
          </p>
          <p>
            <label htmlFor='spassword'>password:</label>
            <input type='text' id='spassword' value={this.state.password} onChange={this.handleSpass.bind(this)} />
            <span>{this.state.spassError}</span>
          </p>
          <p>
            <label htmlFor='srepassword'>password:</label>
            <input type='text' id='srepassword' value={this.state.repassword} onChange={this.handleSrepass.bind(this)} />
            <span>{this.state.srepassError}</span>
          </p>
          <span>{this.state.signupError}</span>
          <button onClick={this.sendSignupInfo.bind(this)}>Signup</button>
        </div>
        <div className={loginBox}>
          <p>
            <label htmlFor='loginemail'>email:</label>
            <input type='text' id='loginemail' value={this.state.lemail} onChange={this.handlelEmail.bind(this)} />
            <span>{this.state.lemailError}</span>
          </p>
          <p>
            <label htmlFor='lpassword'>password:</label>
            <input type='text' id='lpassword' value={this.state.lpassword} onChange={this.handleLpass.bind(this)} />
            <span>{this.state.lpassError}</span>
          </p>
          <span>{this.state.loginError}</span>
          <button onClick={this.sendLoginInfo.bind(this)}>Login</button>
        </div>
        
      </div>
    );
  }
}