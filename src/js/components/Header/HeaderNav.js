import React from 'react';
import { Row,Col,Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import Url from '../../apipackage/frontPageMediaFile.json';
let LogoUrl = Url.LogoUrl;
console.log(LogoUrl);
import './headerNav.less'
//import ReactDOM from 'react-dom';

export default class Headernav extends React.Component{

constructor(){
  super();
  this.state = {
    current: 'homepage'
  };
}

handleClick(e){
  this.setState({current: e,key});
}

  render(){
    return(
      <header className="headernav">
        <a href="/" className="logo">
          <img src={LogoUrl} alt="logo" />
        </a>
        <Row>
          <Col span={2}></Col>
          <Col span={10}></Col>
          <Col span={10}>
            <Menu className="headerlist" mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
              <Menu.Item className="headerli" key="homepage">首页</Menu.Item>
              <Menu.Item className="headerli" key="section1">栏目</Menu.Item>
              <Menu.Item className="headerli" key="section2">栏目</Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
