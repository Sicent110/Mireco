var React = require('react');
var ReactDOM = require('react-dom');
import Headernav from '../components/Header/index';
import FooterIndex from '../components/Footer/index';
import BodyIndex from '../components/Body/index';
import '../../theme/theme.less'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Headernav />
        <BodyIndex />

        <FooterIndex />
      </div>
    )
  }
}
