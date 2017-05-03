var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Link,
  history
} from 'react-router-dom';
import Home from './js/containers/Home';
import Editor from './js/components/Body/Editor/index';
import User from './js/containers/User';
import Test from './js/containers/test';
import './theme/theme.less';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'
import reducerRoot from './js/redux/reducers/reducer'
import store from './js/redux/store/store'

// const store = createStore(reducerRoot);


export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/test" component={Test}/>
            <Route path="/user" component={User}/>
            <Route path="/edit" component={Editor}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('example'));
