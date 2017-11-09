/**
 * Created by yangyang.xu on 2017/11/7.
 */
// js组件模板
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes = {

  };
  static defaultProps = {

  };
  //父组件定义ChildContext，从这一层开始的子组件都可以拿到定义的context,适用于全局变量的传递，其他尽量使用props层层传递
  static childContextTypes = {
    color: PropTypes.string
  };
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    return (
      <div>

      </div>
    );
  }
  handleBtnClick = () => {
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
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}

export default Base
