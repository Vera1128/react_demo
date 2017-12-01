/**
 * Created by yangyang.xu on 2017/11/28.
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Detail extends Component {
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
      <div>
        <div>hhaha,这是文章详情</div>
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
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}

export default Detail
