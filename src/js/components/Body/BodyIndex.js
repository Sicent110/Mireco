import React from 'react';
//import ReactDOM from 'react-dom';
import LoginIndex from '../Body/Login/index';
import './BodyIndex.less';
import FrontCarousel from './FrontCarousel/FrontCarousel';
import { Row,Col } from 'antd';

export default class BodyIndex extends React.Component {
  render() {
    return (
      <div className="BodyIndex">
        <Row className="frontRow">
          <Col span={2}></Col>
          <Col span={10} className="FrontCarousel">
            <FrontCarousel />
          </Col>
          <Col span={5}></Col>
          <Col span={5}>
            <LoginIndex />
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
