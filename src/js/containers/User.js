var React = require('react');
var ReactDOM = require('react-dom');
import Headernav from '../components/Header/index';
import FooterIndex from '../components/Footer/index';
import BodyIndex from '../components/Body/index';
import UserBody from '../components/Body/User/index'
import '../../theme/theme.less'

export default class User extends React.Component {
  render() {
    return (
      <div>
          <UserBody/>
      </div>
    )
  }
}
