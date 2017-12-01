/**
 * Created by yangyang.xu on 2017/10/30.
 */
import React, { Component, PropTypes} from 'react';
import Index from './component/Index';
import Other from './component/Other';
import Detail from './component/Detail';
import Home from './containers/Home';
import List from './containers/List';
import history from './public/history';
import { Router, Route, hashHistory, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes = {

  };
  static defaultProps = {

  };
  render() {
    return (
      <Router history={history}>
        <div>
          {/*
            放公共的ui，比如头部或尾部
          */}
          <Switch>
            <Route path="/detail" component={Detail}/>
            <Home>
              {/*首页*/}
              <Route exact path="/" component={Index}/>
              {/*文章列表页*/}
              <Route path="/list" component={List}/>
              {/*彩蛋*/}
              <Route path="/other" component={Other}/>
            </Home>
            {/*文章详情页*/}
          </Switch>
        </div>
      </Router>
    );
  }
  //在render方法之前执行
  componentWillMount() {

  }
  //在render方法之后执行
  componentDidMount() {

  }
  //组件卸载前，常在其中执行一些清理方法，如事件回收或清除定时器
  componentWillUnmount() {

  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}
export default App
