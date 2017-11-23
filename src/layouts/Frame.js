/**
 * Created by yangyang.xu on 2017/11/21.
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import Nav from './Nav';
import Home from '../views/Home';
import Detail from '../views/Detail';
import { Route, Link, withRouter } from 'react-router-dom';

class MyFrame extends Component {
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
      <div className="frame">
        <div className="header">
          <Link to="/">Home</Link><br/>
          <Link to="/detail">Detail</Link>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
  //生命周期函数
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
    //使用is进行比较是否需要更新节点，节省性能
    // const thisProps = this.props || {};
    // const thisState = this.state || {};
    // if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length){
    //   return true;
    // }
    //
    // for (const key in nextProps) {
    //   if (nextProps.hasOwnProperty(key) && !is(thisProps[key], nextProps[key])){
    //     return true;
    //   }
    // }
    //
    // for (const key in nextState) {
    //   if (nextState.hasOwnProperty(key) && !is(thisState[key], nextState[key])){
    //     return true;
    //   }
    // }
    // return false;
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}

export default withRouter(MyFrame)
